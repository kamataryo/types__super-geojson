import type SuperGeoJSON from './index.d.ts'
import { test } from 'node:test'
import assert from 'node:assert'

test('should define a super feature collection', () => {
  const fc: SuperGeoJSON.SuperFeatureCollection = {
    type: 'SuperFeatureCollection',
    features: [],
  }
  assert.equal(fc.type, 'SuperFeatureCollection')
})

test('should define a polyhedron', () => {
  const polygon1: SuperGeoJSON.Polygon = {
    type: 'Polygon',
    coordinates: [[[0, 0, 0, 1], [0, 0, 0, 2], [0, 0, 0, 3], [0, 0, 0, 1]]],
  }
  const polygon2: SuperGeoJSON.Polygon = {
    type: 'Polygon',
    coordinates: [[[0, 0, 1, 0], [0, 0, 2, 0], [0, 0, 3, 0], [0, 0, 1, 0]]],
  }
  const polygon3: SuperGeoJSON.Polygon = {
    type: 'Polygon',
    coordinates: [[[0, 1, 0, 0], [0, 2, 0, 0], [0, 3, 0, 0], [0, 1, 0, 0]]],
  }
  const polygon4: SuperGeoJSON.Polygon = {
    type: 'Polygon',
    coordinates: [[[1, 0, 0, 0], [2, 0, 0, 0], [3, 0, 0, 0], [1, 0, 0, 0]]],
  }

  const polyhedron: SuperGeoJSON.Polyhedron = {
    type: 'Polyhedron',
    coordinates: [polygon1, polygon2, polygon3, polygon4].map(polygon => polygon.coordinates),
  }
  const feature: SuperGeoJSON.SuperFeature<SuperGeoJSON.Polyhedron> = {
    type: 'SuperFeature',
    properties: null,
    geometry: polyhedron,
  }
  assert.equal(feature.type, 'SuperFeature')
  assert.equal(feature.geometry.type, 'Polyhedron')
})

test('can define a polytope', () => {
  const feature: SuperGeoJSON.SuperFeature<SuperGeoJSON.Polytope> = {
    type: 'SuperFeature',
    properties: null,
    geometry: {
      type: 'Polytope4',
      coordinates: [[[[0, 0, 0], [1, 0, 0], [1, 1, 0]]]]
    }
  }
  assert.equal(feature.type, 'SuperFeature')
  assert.equal(feature.geometry.type, 'Polytope4')
})

test('can define a multi polyhedron', () => {
  const feature: SuperGeoJSON.SuperFeature<SuperGeoJSON.MultiPolyhedron> = {
    type: 'SuperFeature',
    properties: null,
    geometry: {
      type: 'MultiPolyhedron',
      coordinates: [[[[[0, 0, 0], [1, 0, 0], [1, 1, 0]]]]]
    }
  }
  assert.equal(feature.type, 'SuperFeature')
  assert.equal(feature.geometry.type, 'MultiPolyhedron')
})