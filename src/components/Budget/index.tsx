import { Pane } from "../../elements/Pane"

import "./Budget.scss"
import * as icons from "../../icons"
import { Metric, MetricTitle, MetricValue } from "../../elements/Metric";
import { Button } from "../../elements/Button"
import { useState } from "react"
import { IconType } from "react-icons/lib"
import { Input } from "../../elements/Input"
import { Card, CardDetails, CardIcon, CardList } from "../../elements/Card"

export interface BudgetCategory {
  icon: string;
  title: string;
  value: number
}

export type BudgetView = "categories" | "add-category";

const metrics = [
  {
    title: "Monthly Income",
    value: 4000
  },
  {
    title: "Allocated",
    value: 2500
  },
  {
    title: "Remaining",
    value: 1500
  }
];

const radioIcons = [
  "Transportation",
  "Housing",
  "Food",
  "DiningOut",
  "HealthFitness",
];

type RadioIcon = typeof radioIcons[number];

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  trailingZeroDisplay: "stripIfInteger"
});

const AddCategory = ({ onCancel, onAddCategory } : {
  onCancel: () => void,
  onAddCategory: (newCategory: BudgetCategory) => void,
}) => {
  const [category, setCategory] = useState<string>("")
  const [categoryIcon, setCategoryIcon] = useState("Transportation");
  const [limit, setLimit] = useState<string>("");

  return (
    <Pane size="md" title="Budget">
      <h2>New Category</h2>
      <div className="mt-2">
        <label className="input--top-label" htmlFor="category">
          <span>Category name</span>
          <Input
            id="category"
            onChange={e => setCategory(e.target.value)}
            value={category}
          />
        </label>
        <div className="mt-1 input--top-label">
          <span>Icons</span>
          <div className="radio-icons">
            {radioIcons.map((icon: RadioIcon) => {
              const Icon = (icons as Record<string, IconType>)[icon]
              return (
                <div className="radio-icon">
                  <input
                    className="sr-only"
                    type="radio"
                    name="icon"
                    value={icon}
                    id={icon}
                    checked={icon === categoryIcon}
                    onChange={e => setCategoryIcon(e.target.value)}
                  />
                  <label htmlFor={icon}>
                    <Icon />
                  </label>
                </div>
              )
            })}
          </div>
        </div>
        <label className="mt-1 input--top-label" htmlFor="category">
          <span>Limit</span>
          <Input
            id="limit"
            type="number"
            onChange={e => setLimit(e.target.value)}
            value={limit}
          />
        </label>
        <div className="mt-1 button--group">
          <Button variant="outline" block onClick={onCancel}>Cancel</Button>
          <Button
            block
            onClick={() => {
              onAddCategory(
                {
                  icon: categoryIcon,
                  title: category,
                  value: Number(limit)
                }
              );
              onCancel();
            }}>
            Add new category
          </Button>
        </div>
      </div>
    </Pane>
  )
}

export const Budget = () => {
  const [view, setView] = useState<BudgetView>("categories");
  const [categories, setCategories] = useState<BudgetCategory[]>([
    {
      icon: "Transportation",
      title: "Transportation",
      value: 400
    }
  ]);

  const addCategory = () => {
    setView("add-category");
  };

  const addNewCategory = (newCategory: BudgetCategory) => {
    setCategories(prevCategories => [...prevCategories, newCategory]);
  }

  if (view === "add-category") {
    return (
      <AddCategory
        onCancel={() => setView("categories")}
        onAddCategory={addNewCategory}
      />
    );
  }

  return (
    <Pane size="md" title="Budget">
      <div className="metrics-list">
        {metrics.map((metric, index) => {
          const key = `${metric.title}-${index}`
          return (
            <Metric key={key}>
              <MetricTitle>{metric.title}</MetricTitle>
              <MetricValue>{formatter.format(metric.value)}</MetricValue>
            </Metric>
          )
        })}
      </div>
      <h3 className="budget-category-title mt-2">Categories</h3>
      <CardList className="budget-category-list m-0">
        {categories.map(({ title, icon, value }, index) => {
          const key = `${title}-${index}`
          const Icon = (icons as Record<string, IconType>)[icon]
          return (
            <Card key={key}>
              <CardIcon>
                <Icon />
              </CardIcon>
              <CardDetails className="card--category">
                <h2>{title}</h2>
                <span>{formatter.format(value)}</span>
              </CardDetails>
            </Card>
          )
        })}
      </CardList>
      <Button onClick={addCategory} variant="outline" size="sm" block>
        &#43; New Category
      </Button>
    </Pane>
  )
}
