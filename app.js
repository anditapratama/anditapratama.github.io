// written by Noor Wachid
var _0x1115=['year','getFullYear','width','innerWidth','innerHeight','rgb(200,200,200)','floor','addEventListener','resize','pow','length','linkRadius','lineWidth','strokeStyle','rgba(','moveTo','random','speed','defaultSpeed','directionAngle','color','radius','variantRadius','vector','update','border','draw','closePath','fillStyle','fill','particleAmount','push','requestAnimationFrame','clearRect','theCanvas','lineColor','match','This\x20landing\x20page\x20is\x20designed\x20&\x20coded\x20by\x20Noor\x20Wachid.','log','He\x20is\x20not\x20the\x20content\x20writter,\x20so\x20some\x20mispelled\x20English\x20words\x20are\x20not\x20his\x20fault.','\x20\x20\x20\x20/\x20\x20\x20|\x20\x20\x20/\x20/\x20\x20/\x20___\x20\x20/\x20\x20/\x20___\x20\x20/\x20\x20/\x20___\x20|\x20','\x20\x20/\x20/\x20|\x20|\x20/\x20/\x20\x20/\x20/\x20\x20/\x20/\x20\x20/\x20/\x20\x20/\x20/\x20\x20/\x20_\x20\x20__/\x20\x20','\x20/\x20/\x20\x20|\x20|/\x20/\x20\x20/\x20/__/\x20/\x20\x20/\x20/__/\x20/\x20\x20/\x20/\x20|\x20|\x20\x20\x20\x20','/_/\x20\x20\x20|___/\x20\x20/______/\x20\x20/______/\x20\x20/_/\x20\x20|_|\x20\x20\x20\x20','\x20\x20/\x20//\x20//\x20/\x20/\x20/_|\x20|\x20\x20/\x20/__\x20\x20/\x20__\x20\x20/\x20/\x20/\x20/\x20/_/\x20/\x20','\x20/_______/\x20/_/\x20\x20|_|\x20/____/\x20/_/\x20/_/\x20/_/\x20/_____/\x20\x20','getElementById'];(function(_0x4cc92c,_0x50710b){var _0x12bcc5=function(_0x3896ed){while(--_0x3896ed){_0x4cc92c['push'](_0x4cc92c['shift']());}};_0x12bcc5(++_0x50710b);}(_0x1115,0xbb));var _0xd7ca=function(_0x2ba3df,_0x2e8ac4){_0x2ba3df=_0x2ba3df-0x0;var _0x1069b8=_0x1115[_0x2ba3df];return _0x1069b8;};let date=new Date();document[_0xd7ca('0x0')](_0xd7ca('0x1'))['textContent']=date[_0xd7ca('0x2')]();let resizeReset=function(){w=canvasBody[_0xd7ca('0x3')]=window[_0xd7ca('0x4')];h=canvasBody['height']=window[_0xd7ca('0x5')];};const opts={'particleColor':_0xd7ca('0x6'),'lineColor':_0xd7ca('0x6'),'particleAmount':Math[_0xd7ca('0x7')](window['innerWidth']/0x1e),'defaultSpeed':0x1,'variantSpeed':0x1,'defaultRadius':0x2,'variantRadius':0x2,'linkRadius':0xc8};window[_0xd7ca('0x8')](_0xd7ca('0x9'),function(){deBouncer();});let deBouncer=function(){clearTimeout(tid);tid=setTimeout(function(){resizeReset();},delay);};let checkDistance=function(_0x9cd11f,_0x23a096,_0x3e1d63,_0x2cdda7){return Math['sqrt'](Math[_0xd7ca('0xa')](_0x3e1d63-_0x9cd11f,0x2)+Math[_0xd7ca('0xa')](_0x2cdda7-_0x23a096,0x2));};let linkPoints=function(_0x32ca25,_0x44b682){for(let _0x1cf554=0x0;_0x1cf554<_0x44b682[_0xd7ca('0xb')];_0x1cf554++){let _0x350211=checkDistance(_0x32ca25['x'],_0x32ca25['y'],_0x44b682[_0x1cf554]['x'],_0x44b682[_0x1cf554]['y']);let _0x261ac1=0x1-_0x350211/opts[_0xd7ca('0xc')];if(_0x261ac1>0x0){drawArea[_0xd7ca('0xd')]=0.5;drawArea[_0xd7ca('0xe')]=_0xd7ca('0xf')+rgb[0x0]+',\x20'+rgb[0x1]+',\x20'+rgb[0x2]+',\x20'+_0x261ac1+')';drawArea['beginPath']();drawArea[_0xd7ca('0x10')](_0x32ca25['x'],_0x32ca25['y']);drawArea['lineTo'](_0x44b682[_0x1cf554]['x'],_0x44b682[_0x1cf554]['y']);drawArea['closePath']();drawArea['stroke']();}}};Particle=function(_0x379ec5,_0x13564f){this['x']=Math[_0xd7ca('0x11')]()*w;this['y']=Math[_0xd7ca('0x11')]()*h;this[_0xd7ca('0x12')]=opts[_0xd7ca('0x13')]+Math[_0xd7ca('0x11')]()*opts['variantSpeed'];this[_0xd7ca('0x14')]=Math[_0xd7ca('0x7')](Math[_0xd7ca('0x11')]()*0x168);this[_0xd7ca('0x15')]=opts['particleColor'];this[_0xd7ca('0x16')]=opts['defaultRadius']+Math[_0xd7ca('0x11')]()*opts[_0xd7ca('0x17')];this[_0xd7ca('0x18')]={'x':Math['cos'](this[_0xd7ca('0x14')])*this[_0xd7ca('0x12')],'y':Math['sin'](this[_0xd7ca('0x14')])*this[_0xd7ca('0x12')]};this[_0xd7ca('0x19')]=function(){this[_0xd7ca('0x1a')]();this['x']+=this[_0xd7ca('0x18')]['x'];this['y']+=this['vector']['y'];};this[_0xd7ca('0x1a')]=function(){if(this['x']>=w||this['x']<=0x0){this[_0xd7ca('0x18')]['x']*=-0x1;}if(this['y']>=h||this['y']<=0x0){this['vector']['y']*=-0x1;}if(this['x']>w)this['x']=w;if(this['y']>h)this['y']=h;if(this['x']<0x0)this['x']=0x0;if(this['y']<0x0)this['y']=0x0;};this[_0xd7ca('0x1b')]=function(){drawArea['beginPath']();drawArea['arc'](this['x'],this['y'],this[_0xd7ca('0x16')],0x0,Math['PI']*0x2);drawArea[_0xd7ca('0x1c')]();drawArea[_0xd7ca('0x1d')]=this[_0xd7ca('0x15')];drawArea[_0xd7ca('0x1e')]();};};function setup(){particles=[];resizeReset();for(let _0x20b6ec=0x0;_0x20b6ec<opts[_0xd7ca('0x1f')];_0x20b6ec++){particles[_0xd7ca('0x20')](new Particle());}window[_0xd7ca('0x21')](loop);}function loop(){window[_0xd7ca('0x21')](loop);drawArea[_0xd7ca('0x22')](0x0,0x0,w,h);for(let _0x4ab54b=0x0;_0x4ab54b<particles['length'];_0x4ab54b++){particles[_0x4ab54b][_0xd7ca('0x19')]();particles[_0x4ab54b]['draw']();}for(let _0x3062de=0x0;_0x3062de<particles[_0xd7ca('0xb')];_0x3062de++){linkPoints(particles[_0x3062de],particles);}}const canvasBody=document[_0xd7ca('0x0')](_0xd7ca('0x23')),drawArea=canvasBody['getContext']('2d');let delay=0xc8,tid,rgb=opts[_0xd7ca('0x24')][_0xd7ca('0x25')](/\d+/g);resizeReset();setup();console['log'](_0xd7ca('0x26'));console[_0xd7ca('0x27')](_0xd7ca('0x28'));console[_0xd7ca('0x27')]('\x20\x20\x20\x20\x20___\x20\x20\x20\x20\x20__\x20\x20\x20_______\x20\x20\x20_______\x20\x20\x20_____\x20\x20');console[_0xd7ca('0x27')](_0xd7ca('0x29'));console[_0xd7ca('0x27')]('\x20\x20\x20/\x20/|\x20|\x20\x20/\x20/\x20\x20/\x20/\x20\x20/\x20/\x20\x20/\x20/\x20\x20/\x20/\x20\x20/\x20/__/\x20/\x20');console[_0xd7ca('0x27')](_0xd7ca('0x2a'));console[_0xd7ca('0x27')](_0xd7ca('0x2b'));console[_0xd7ca('0x27')](_0xd7ca('0x2c'));console[_0xd7ca('0x27')]('\x20\x20\x20\x20__\x20__\x20__\x20\x20____\x20\x20\x20\x20\x20_____\x20\x20__\x20\x20__\x20\x20__\x20\x20____\x20\x20');console[_0xd7ca('0x27')]('\x20\x20\x20/\x20//\x20//\x20/\x20/\x20__\x20|\x20\x20\x20/\x20___/\x20/\x20/_/\x20/\x20/\x20/\x20/\x20__\x20|\x20');console[_0xd7ca('0x27')](_0xd7ca('0x2d'));console[_0xd7ca('0x27')](_0xd7ca('0x2e'));