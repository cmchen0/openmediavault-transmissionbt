/**
 * This file is part of OpenMediaVault TransmissionBT.
 *
 * @license   http://www.gnu.org/licenses/gpl.html GPL Version 3
 * @author    Marcel Beck <marcel.beck@mbeck.org>
 * @copyright Copyright (c) 2011-2012 Marcel Beck
 * @website   http://omv-plugins.org
 *
 * OpenMediaVault is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * any later version.
 *
 * OpenMediaVault is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with OpenMediaVault. If not, see <http://www.gnu.org/licenses/>.
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
OMV.Module.Services.TransmissionBT.Admin.TabPanel = function (config) {
	var initialConfig = {
		border           :false,
		activeTab        :0,
		layoutOnTabChange:true
	};
	Ext.apply(initialConfig, config);
	OMV.Module.Services.TransmissionBT.Admin.TabPanel.superclass.constructor.call(
					this, initialConfig);
};
Ext.extend(OMV.Module.Services.TransmissionBT.Admin.TabPanel, Ext.TabPanel, {
	initComponent:function () {
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
	cls     :OMV.Module.Services.TransmissionBT.Admin.TabPanel,
	title   :_("Server"),
	position:20
});