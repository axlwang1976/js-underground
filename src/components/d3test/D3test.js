import React from 'react';
import { Graph } from 'react-d3-graph';

const data = {
  nodes: [
    { id: '我' },
    { id: '妻' },
    { id: '我父' },
    { id: '我母' },
    { id: '我兄' },
    { id: '兄妻' },
    { id: '父二弟' },
    { id: '父三弟' },
    { id: '父小弟' },
    { id: '母母' },
    { id: '母二妹' },
    { id: '母小妹' },
    { id: '母三弟' },
    { id: '妻父' },
    { id: '妻母' },
    { id: '妻弟' }
  ],
  links: [
    { source: '我', target: '妻' },
    { source: '我父', target: '我' },
    { source: '我母', target: '我' },
    { source: '我母', target: '我父' },
    { source: '我兄', target: '我' },
    { source: '我兄', target: '我父' },
    { source: '我兄', target: '我母' },
    { source: '我兄', target: '兄妻' },
    { source: '我父', target: '父二弟' },
    { source: '我父', target: '父三弟' },
    { source: '我父', target: '父小弟' },
    { source: '父三弟', target: '父二弟' },
    { source: '父小弟', target: '父三弟' },
    { source: '父二弟', target: '父小弟' },
    { source: '我母', target: '母母' },
    { source: '我母', target: '母二妹' },
    { source: '我母', target: '母三弟' },
    { source: '我母', target: '母小妹' },
    { source: '母母', target: '母二妹' },
    { source: '母母', target: '母三弟' },
    { source: '母母', target: '母小妹' },
    { source: '母三弟', target: '母二妹' },
    { source: '母小妹', target: '母三弟' },
    { source: '母二妹', target: '母小妹' },
    { source: '妻父', target: '妻' },
    { source: '妻母', target: '妻' },
    { source: '妻弟', target: '妻' },
    { source: '妻弟', target: '妻父' },
    { source: '妻弟', target: '妻母' },
    { source: '妻父', target: '妻母' }
  ]
};

function D3test() {
  const myConfig = {
    width: 1200,
    height: 600,
    nodeHighlightBehavior: true,
    node: {
      color: 'lightgreen',
      highlightStrokeColor: 'blue',
      fontSize: 16,
      highlightFontSize: 20
    },
    link: {
      highlightColor: 'lightblue'
    }
  };

  return (
    <Graph
      id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
      data={data}
      config={myConfig}
    />
  );
}

export default D3test;
