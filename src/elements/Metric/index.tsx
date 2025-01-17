import "./Metric.scss";
import React from "react"

export const Metric = ({ children }: {  children?: React.ReactNode }) => {
  return <div className="metric">{children}</div>
}

export const MetricTitle = ({ children }: {  children?: React.ReactNode }) => {
  return <div className="metric-title">{children}</div>;
}

export const MetricValue = ({ children }: {  children?: React.ReactNode }) => {
  return <div className="metric-value">{children}</div>
}
