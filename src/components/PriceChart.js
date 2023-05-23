import React, { useCallback, useEffect, useState } from 'react';
import * as d3 from 'd3';
import PropTypes from 'prop-types';
import '../styles/PriceChart.css';

const PriceChart = ({ coinID }) => {
  const [w, setW] = useState(window.innerWidth);
  const h = w * 0.6;
  const p = 36;
  const svg = d3.select('svg');
  const [prices, setPrices] = useState(null);
  const [timeframe, setTimeframe] = useState(['24H', 1]);

  const numberOfIntervals = useCallback((d) => {
    if (timeframe[0] === '1H') {
      return (d.filter((p, i) => i >= prices.length - 15));
    }
    return d;
  });

  useEffect(() => {
    d3.json(`https://api.coingecko.com/api/v3/coins/${coinID}/market_chart?vs_currency=usd&days=${timeframe[1]}`)
      .then((data) => {
        setPrices(numberOfIntervals(data.prices));
      });
  }, [coinID, timeframe]);

  const handleWidthChange = useCallback(() => {
    setW(window.innerWidth);
  });

  useEffect(() => {
    if (!prices) return;

    window.addEventListener('change', handleWidthChange);

    svg.selectAll('*').remove();
    const xScale = d3.scaleTime()
      .domain([
        d3.min(prices, (p) => p[0]),
        d3.max(prices, (p) => p[0]),
      ])
      .range([0, w]);

    const yScale = d3.scaleLinear()
      .domain([
        d3.min(prices, (p) => p[1]),
        d3.max(prices, (p) => p[1]),
      ])
      .range([h - p, 0]);

    const xAxis = d3.axisBottom(xScale).ticks(7);
    const yAxis = d3.axisRight(yScale);

    svg.append('g')
      .attr('id', 'xAxis')
      .attr('transform', `translate(0, ${h - p})`)
      .call(xAxis);
    svg.append('g')
      .attr('id', 'yAxis')
      .attr('transform', 'translate(0, 6)')
      .call(yAxis.tickSize(w))
      .call((g) => g.selectAll('.tick text')
        .attr('x', 4)
        .attr('dy', -2));

    svg.append('path')
      .datum(prices)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 1.5)
      .attr('d', d3.line()
        .x((d) => xScale(d[0]))
        .y((d) => yScale(d[1])));
  }, [prices, w, timeframe]);

  const timeframes = [
    ['1H', 1],
    ['24H', 1],
    ['7D', 7],
    ['1M', 30],
    ['3M', 90],
    ['1Y', 365],
    ['MAX', 'max'],
  ];

  return (
    <>
      <svg width={w} height={h} />
      <div className="tfBtnsContainer">
        {timeframes.map((tf) => <button type="button" className={`tfBtn ${tf[0] === timeframe[0] && 'active-tFrame'}`} key={tf[0]} onClick={() => setTimeframe(tf)}>{tf[0]}</button>)}
      </div>
    </>
  );
};

PriceChart.propTypes = {
  coinID: PropTypes.string.isRequired,
};

export default PriceChart;
