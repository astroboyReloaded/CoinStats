import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';
import PropTypes from 'prop-types';
import '../styles/PriceChart.css';

const PriceChart = ({ coinID }) => {
  const [prices, setPrices] = useState(null);
  const [w, setW] = useState(window.innerWidth);
  const h = w * 0.6;
  const p = 36;
  const svg = d3.select('svg');

  useEffect(() => {
    d3.json(`https://api.coingecko.com/api/v3/coins/${coinID}/market_chart?vs_currency=usd&days=1`)
      .then((data) => setPrices(data.prices));
  }, [coinID]);

  const handleWidthChange = () => {
    setW(window.innerWidth);
  };

  useEffect(() => {
    if (!prices) return;

    window.addEventListener('change', handleWidthChange);
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

    const xAxis = d3.axisBottom(xScale);
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
  }, [prices, w]);

  return (
    <svg width={w} height={h} />
  );
};

PriceChart.propTypes = {
  coinID: PropTypes.string.isRequired,
};

export default PriceChart;
