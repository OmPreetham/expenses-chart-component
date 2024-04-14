import data from '../data/data.json'

const Chart = () => {
  return (
    <div className="chart">
      <p className="chart__title">Spending - Last 7 days</p>
      <div className="chart__graph-wrapper">
        {data.map((item, index) => {
          return (
            <div key={index} className="chart__bar-wrapper">
              <div className="chart__bar"></div>
              <p className="chart__day">{item.day}</p>
            </div>
          )
        })}
      </div>
      <div className="chart__stats-wrapper">
        <div className="chart__month-wrapper">
          <p className="chart__month-current">Total this month</p>
          <p className="chart__month-total">$478.33</p>
        </div>
        <div className="chart__interest-wrapper">
          <p className="chart__interest-last">+2.4%</p>
          <p className="chart__month-last">from last month</p>
        </div>
      </div>
    </div>
  )
}
export default Chart
