/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  IMPORTS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */

// ----------------------------------------
// LOCAL IMPORTS
// ----------------------------------------
import * as MapperResponse from "@app-data-mappers/responses";
import * as MapperRequest from "@app-data-mappers/requests";


/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  MAIN METHODS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */

export function mapResponseList(mapperName:string, list) {
  return mapList(MapperResponse, mapperName, list);
}

// ----------------------------------------

export function mapResponseData(mapperName:string, list) {
  return mapData(MapperResponse, mapperName, list);
}

// ----------------------------------------

export function mapRequestList(mapperName:string, list) {
  return mapList(MapperRequest, mapperName, list);
}

// ----------------------------------------

export function mapRequestData(mapperName:string, list) {
  return mapData(MapperRequest, mapperName, list);
}


/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  PRIVATE METHODS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */

function mapList(selectedMapper, mapperName:string, list) {
  const mapper = selectedMapper[mapperName];
  if (!mapper) {
    return [];
  }

  return list.map((data) => mapData(selectedMapper, mapperName, data));
}

// ----------------------------------------

function mapData(selectedMapper, mapperName:string, data) {
  const mapper = selectedMapper[mapperName];
  if (!mapper) {
    return {};
  }

  const mappedData = {};
  for (let x in mapper) {
    const key = mapper[x];

    if (key instanceof Function) {
      mappedData[x] = key(data, x);
      continue;
    }

    if (data[key]) {
      mappedData[x] = data[key];
      continue;
    }
  }

  return mappedData;
}

