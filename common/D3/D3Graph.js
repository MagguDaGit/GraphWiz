import React, { useEffect, useRef, useContext } from 'react';
import { FaCoffee, FaBeer, FaCar, FaApple } from 'react-icons/fa';
import ReactDOMServer from 'react-dom/server';
import * as d3 from 'd3';
import { GraphContext } from '../../contexts/GraphContext.js';
import { findNode } from './graph.service';
const D3Graph = ({ graphData }) => {
	const { focusNode } = useContext(GraphContext);

	const svgRef = useRef();
	const defaultForce = -5000;

	useEffect(() => {
		// Clear existing SVG content
		d3.select(svgRef.current).selectAll('*').remove();

		// Set up SVG container
		const svg = d3.select(svgRef.current);
		const width = 1000;
		const height = 1000;

		//Add zoom controlls to svg container
		const zoomContainer = svg
			.call(
				d3.zoom().on('zoom', function (e) {
					zoomContainer.attr('transform', e.transform);
				})
			)
			.append('g');

		const zoomToNode = (node) => {
			const target = node;
			if (target) {
				const [x, y] = [target.x, target.y];
				const scale = 8;
				const translate = [width / 2 - scale * x, height / 2 - scale * y];

				zoomContainer
					.transition()
					.duration(500)
					.attr(
						'transform',
						`translate(${translate[0]}, ${translate[1]}) scale(${scale})`
					);
			}
		};

		if (focusNode) {
			zoomToNode(focusNode);
		}

		// Create a force simulation
		const simulation = d3
			.forceSimulation()
			.force(
				'link',
				d3.forceLink().id((d) => d.id)
			)
			.force('charge', d3.forceManyBody().strength(defaultForce))
			.force('center', d3.forceCenter(width / 2, height / 2));

		svg
			.append('defs')
			.append('marker')
			.attr('id', 'arrowhead')
			.attr('viewBox', '0 -5 10 10')
			.attr('refX', 22.5)
			.attr('refY', 0)
			.attr('markerWidth', 19)
			.attr('markerHeight', 19)
			.attr('orient', 'auto')
			.append('path')
			.attr('fill', '#848484')
			.attr('d', 'M0,-5L10,0L0,5');

		// Add links
		const link = zoomContainer
			.append('g')
			.attr('class', 'links')
			.selectAll('line')
			.data(graphData.links)
			.enter()
			.append('line')
			.attr('strole-width', (d) => d.width || 2)
			.attr('stroke', (d) => d.color || '#848484')
			.attr('marker-end', 'url(#arrowhead)'); // Use the arrowhead marker for all links;

		// Add nodes
		const node = zoomContainer
			.append('g')
			.attr('class', 'nodes')
			.selectAll('g')
			.data(graphData.nodes)
			.enter()
			.append('g')
			.call(
				d3
					.drag()
					.on('start', dragstarted)
					.on('drag', dragged)
					.on('end', dragended)
			)
			.on('click', (event, data) => {});

		// Add circles (nodes)
		node
			.append('circle')
			.attr('r', (d) => d.size || 8) // Set node size
			.attr('fill', (d) => d.color || 'steelblue'); // Set node color

		// Add text labels
		node
			.append('text')
			.style('text-weight', '900')
			.text((d) => d.name || d.id)
			.attr('dy', (d) => (d.size || 8) + 2) // Adjust text position below the circle
			.attr('text-anchor', 'middle') // Center the text horizontally
			.style('pointer-events', 'none'); // Make sure text doesn't interfere with drag events

		// Add icon
		node
			.append('foreignObject')
			.attr('x', (d) => -((d.size || 8) / 2))
			.attr('y', (d) => -((d.size || 8) / 2))
			.attr('width', (d) => d.size || 16)
			.attr('height', (d) => d.size || 16)
			.append('xhtml:div')
			.style('width', '100%')
			.style('height', '100%')
			.style('display', 'flex')
			.style('justify-content', 'center')
			.style('align-items', 'center')
			.html((d) => {
				switch (d.icon) {
					case 'coffee':
						return ReactDOMServer.renderToString(<FaCoffee />);
					case 'beer':
						return ReactDOMServer.renderToString(<FaBeer />);
					case 'car':
						return ReactDOMServer.renderToString(<FaCar />);
					case 'apple':
						return ReactDOMServer.renderToString(<FaApple />);
					default:
						return ReactDOMServer.renderToString(<FaCoffee />);
				}
			});

		// Update simulation with nodes and links
		simulation.nodes(graphData.nodes).on('tick', () => {
			link
				.attr('x1', (d) => d.source.x)
				.attr('y1', (d) => d.source.y)
				.attr('x2', (d) => d.target.x)
				.attr('y2', (d) => d.target.y);

			node.attr('transform', (d) => `translate(${d.x},${d.y})`);
		});

		simulation.force('link').links(graphData.links);

		// Drag functions
		function dragstarted(event, d) {
			if (!event.active) simulation.alphaTarget(0.3).restart();
			d.fx = d.x;
			d.fy = d.y;
		}

		function dragged(event, d) {
			d.fx = event.x;
			d.fy = event.y;
		}

		function dragended(event, d) {
			if (!event.active) simulation.alphaTarget(0);
			d.fx = null;
			d.fy = null;
		}

		return () => {
			// Cleanup function
			simulation.stop();
		};
	}, [graphData, focusNode]);

	return (
		<svg
			ref={svgRef}
			width='100%'
			height='100%'
		></svg>
	);
};

export default D3Graph;
