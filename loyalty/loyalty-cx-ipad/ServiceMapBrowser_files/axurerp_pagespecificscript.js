for(var i = 0; i < 6; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u1'] = 'center';document.getElementById('u2_img').tabIndex = 0;
HookHover('u2', false);

u2.style.cursor = 'pointer';
$axure.eventManager.click('u2', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('CX-Crawl-OnOff.html');

}
});
gv_vAlignTable['u3'] = 'center';document.getElementById('u4_img').tabIndex = 0;
HookHover('u4', false);

u4.style.cursor = 'pointer';
$axure.eventManager.click('u4', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u5'] = 'center';