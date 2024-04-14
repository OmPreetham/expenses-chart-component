import data from '../data/data.json'

const Chart = () => {
  // Find the index of the top spending item
  const topIndex = data.findIndex(
    (item) => item.amount === Math.max(...data.map((item) => item.amount))
  )

  return (
    <div className="chart">
      <p className="chart__title">Spending &minus; Last 7 days</p>
      <div className="chart__graph-wrapper">
        {data.map((item, index) => (
          <div key={index} className="chart__bar-wrapper">
            <div className="chart__bar-amount">${item.amount}</div>
            <div
              className="chart__bar"
              style={{
                height: `${item.amount / 6}rem`,
                backgroundColor:
                  index === topIndex
                    ? 'hsl(186, 34%, 60%)'
                    : 'hsl(10, 79%, 65%)', // Use topIndex to determine color
              }}
            ></div>
            <p className="chart__day">{item.day}</p>
          </div>
        ))}
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
