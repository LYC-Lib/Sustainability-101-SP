function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6LWFUBJwwrp":
        Script1();
        break;
      case "6YWYYm4okqX":
        Script2();
        break;
      case "5rILDR1dpog":
        Script3();
        break;
      case "66DXUQw6RAB":
        Script4();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  player.once(() => {
const target = object('6n23VND2kAV');
const duration = 500;
const easing = 'ease-out';
const id = '68MJlKH3fh7';
const pulseAmount = 0.03;
const delay = 1000;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  player.once(() => {
const target = object('6oyJPgV1EYV');
const duration = 750;
const easing = 'ease-out';
const id = '6iKsJ1gZmc0';
const pulseAmount = 0.03;
const delay = 3500;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  player.once(() => {
const target = object('6BAmt513JqK');
const duration = 750;
const easing = 'ease-out';
const id = '6iKsJ1gZmc0';
const pulseAmount = 0.07;
const delay = 10500;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
