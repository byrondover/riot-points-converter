'use strict';

const riotPointsToUsdRatio = 130;

exports.rpToUsd = function(riotPoints) {

  let usd = riotPoints / riotPointsToUsdRatio;

  return usd;

};

exports.usdToRp = function(usd) {

  let riotPoints = usd * riotPointsToUsdRatio;

  return riotPoints;

};
