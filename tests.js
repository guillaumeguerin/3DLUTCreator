function radianToDegrees(rad) {
  return rad * 180 / Math.PI;
}

QUnit.test( "radianToDegrees()", function( assert ) {
  assert.equal( radianToDegrees(0), 0, "radianToDegrees(0) equals 0" );
  assert.equal( Math.round(radianToDegrees(2 * Math.PI)), 360, "radianToDegrees(2π) equals 0" );
  assert.equal( Math.round(radianToDegrees(1)), 57, "radianToDegrees(π) equals 180" );
  assert.equal( Math.round(radianToDegrees(Math.PI)), 180, "radianToDegrees(π) equals 180" );
});

function degreesToRadians(deg) {
  return deg * Math.PI / 180;
}

QUnit.test( "degreesToRadians()", function( assert ) {
  assert.equal( degreesToRadians(0), 0, "degreesToRadians(0) equals 0" );
  assert.equal( Math.round(degreesToRadians(135)), 2, "degreesToRadians(135) equals 2" );
});

function scalarProduct(xA, xB, yA, yB) {
  var lineLength = Math.pow(xB - xA, 2) + Math.pow(yB - yA, 2);
  return Math.sqrt(lineLength);
}

QUnit.test( "scalarProduct()", function( assert ) {
  assert.equal( scalarProduct(0, 0, 0, 0), 0, "scalarProduct(0,0,0,0) equals 0" );
  assert.equal( scalarProduct(0, 0, 20, 0), 20, "scalarProduct(0,0,0,0) equals 20" );
});