/**
 * Created by JetBrains PhpStorm.
 * User: mbeck
 * Date: 29.11.11
 * Time: 00:03
 * To change this template use File | Settings | File Templates.
 */

// require("js/omv/NavigationPanel.js")

// require("js/omv/module/transmissionbt/navigation/panel.js")

// require("js/omv/module/transmissionbt/admin/panel/settings.js")
// require("js/omv/module/transmissionbt/admin/panel/files_and_locations.js")
// require("js/omv/module/transmissionbt/admin/panel/peer.js")
// require("js/omv/module/transmissionbt/admin/panel/bandwidth.js")
// require("js/omv/module/transmissionbt/admin/panel/queueing.js")
// require("js/omv/module/transmissionbt/admin/panel/scheduling.js")

Ext.ns("OMV.Module.Services.TransmissionBT.Admin");

/**
 * @class OMV.Module.Services.TransmissionBT.Admin.TabPanel
 * @derived Ext.TabPanel
 */
OMV.Module.Services.TransmissionBT.Admin.TabPanel = function(config) {
	var initialConfig = {
		border: false,
		activeTab: 0,
		layoutOnTabChange: true
	};
	Ext.apply(initialConfig, config);
	OMV.Module.Services.TransmissionBT.Admin.TabPanel.superclass.constructor.call(
	  this, initialConfig);
};
Ext.extend(OMV.Module.Services.TransmissionBT.Admin.TabPanel, Ext.TabPanel, {
	initComponent : function() {
		this.items = [
			new OMV.Module.Services.TransmissionBT.Admin.SettingsPanel,
			new OMV.Module.Services.TransmissionBT.Admin.FilesAndLocationsPanel,
			new OMV.Module.Services.TransmissionBT.Admin.PeerPanel,
			new OMV.Module.Services.TransmissionBT.Admin.BandwidthPanel,
			new OMV.Module.Services.TransmissionBT.Admin.QueuingPanel,
			new OMV.Module.Services.TransmissionBT.Admin.SchedulingPanel
		];
		OMV.Module.Services.TransmissionBT.Admin.TabPanel.superclass.initComponent.apply(
		  this, arguments);
	}
});
OMV.NavigationPanelMgr.registerPanel("services", "transmissionbt", {
	cls: OMV.Module.Services.TransmissionBT.Admin.TabPanel,
	title: _("Server"),
	position: 20
});