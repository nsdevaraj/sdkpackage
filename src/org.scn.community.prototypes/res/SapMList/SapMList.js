/**
 * Copyright 2014 Scn Community Contributors
 * 
 * Original Source Code Location:
 *  https://github.com/org-scn-design-studio-community/sdkpackage/
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); 
 * you may not use this file except in compliance with the License. 
 * You may obtain a copy of the License at 
 *  
 *  http://www.apache.org/licenses/LICENSE-2.0
 *  
 * Unless required by applicable law or agreed to in writing, software 
 * distributed under the License is distributed on an "AS IS" BASIS, 
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
 * See the License for the specific language governing permissions and 
 * limitations under the License. 
 */
(function() {
/** code for recognition of script path */
var myScript = $("script:last")[0].src;
var _readScriptPath = function () {
	if(myScript) {
		var myScriptSuffix = "res/SapMList/";
		var mainScriptPathIndex = myScript.indexOf(myScriptSuffix);
 		var ownScriptPath = myScript.substring(0, mainScriptPathIndex) + myScriptSuffix;
 		return ownScriptPath;
	}
		
	return "";
};
/** end of path recognition */

jQuery.sap.require("sap.m.List");

sap.ui.commons.layout.AbsoluteLayout.extend("org.scn.community.prototypes.SapMList", {

	metadata: {
        properties: {
        	
        }
	},
	
  	initDesignStudio: function() {
		var that = this;
		this._ownScript = _readScriptPath();
		
		this.addStyleClass("scn-pack-SapMList");
		this.addStyleClass("scn-pack-FullSizeChildren");
		
		var app = new sap.m.App("myApp");
		
		this.addContent(
				app,
			{left: "0px", top: "0px"}
		);
	
		var isBlueCrystal = true; // window.location.search.search("sap_bluecrystal") >= 0;

		function addFioriButton(){
			return new sap.m.Select({
				title: "Page Style",
				tooltip: "Page Style",
				items: [
					new sap.ui.core.Item({ key: "0", text: "Normal" }),
					new sap.ui.core.Item({ key: "1", text: "Fiori Object" })
				],
				selectedItem: "0",
				change: function(oControlEvent){
						var sKey = oControlEvent.getParameter("selectedItem").getKey();
						jQuery(".sapMPage").toggleClass("sapUiFioriObjectPage", sKey == "1");
				}
			});
		}

		function addDialogButton(){
			return new sap.m.Button({
				text : "Dialog",
				press : function(){
					var page = this.getParent().getParent();
					var list = page.getContent()[0];
					showDialog(page, list); }
			})
		}
		
		/*
		// ================================================================================
		// create application pages for the different lists
		// ================================================================================
		*/
		var listOverview = new sap.m.Page("listOverview", {
			title : "List Overview",
			footer : new sap.m.Bar({
				contentMiddle : [
					addFioriButton(),
					new sap.m.Button({
						text : "Embedded",
						press : switchStyle
					}) ]
			})
		});

		var detailPage = new sap.m.Page("detailPage", {
			title : "Detail Page",
			showNavButton : true,
			navButtonText : "Back",
			navButtonPress : function() {
				app.back();
			}
		});



		var oNone = new sap.ui.core.Item({
			key: "0",
			text: "None"
		});

		var oInner = new sap.ui.core.Item({
			key: "1",
			text: "Inner"
		});

		var oAll = new sap.ui.core.Item({
			key: "2",
			text: "All"
		});
		var oTransparent = new sap.ui.core.Item({
			key: "0",
			text: "Transparent"
		});

		var oTranslucent = new sap.ui.core.Item({
			key: "1",
			text: "Translucent"
		});

		var oSolid = new sap.ui.core.Item({
			key: "2",
			text: "Solid"
		});
		// ================================================================================

			var standardListThumb = new sap.m.Page("standardListThumb", {
			title : "Standard List Thumb",
			showNavButton : true,
			navButtonText : "Back",
			navButtonPress : function() {
				app.back();
			},
			footer : new sap.m.Bar({
				contentMiddle : [
					addFioriButton(),
					addDialogButton(),
					new sap.m.Button({
						text : "Embedded",
						press : switchStyle
					}),
					new sap.m.Button({
						text : "None",
						press : function() {switchModeNone(oListStandardThumb) }
					}),
					new sap.m.Button({
						text : "Single",
						press : function() {switchModeSingle(oListStandardThumb) }
					}),
					new sap.m.Button({
						text : "SingleMaster",
						press : function() {switchModeSingleMaster(oListStandardThumb) }
					}),
					new sap.m.Button({
						text : "Multi",
						press : function() {switchModeMulti(oListStandardThumb) }
					}),
					new sap.m.Button({
						text : "Delete",
						press : function() {switchModeDelete(oListStandardThumb) }
					}),
					new sap.m.Button({
						text : "Swipe",
						press : function() {switchToSwipe(oListStandardThumb) }
					}),
					new sap.m.Button({
						text : "Switch Mode Interaction",
						press : function() {switchModeInteraction(oListStandardThumb)}
					}),
					new sap.m.Select({
						name: "Separators",
						title: "Separators",
						items: [oNone, oInner, oAll],
						selectedItem: oAll,
						change: function(oEvent) {switchSeparators(oEvent, oListStandardThumb)}
					}),
					new sap.m.Select({
						name: "BG-Design",
						title: "BG-Design",
						items: [oTransparent, oTranslucent, oSolid],
						selectedItem: oTransparent,
						change: function(oEvent) {switchBGDesign(oEvent, oListStandardThumb)}
					})
				]
			})
		});

		var standardListIcon = new sap.m.Page("standardListIcon", {
			title : "Standard List Icon",
			showNavButton : true,
			navButtonText : "Back",
			navButtonPress : function() {
				app.back();
			},
			footer : new sap.m.Bar({
				contentMiddle : [
					addFioriButton(),
					addDialogButton(),
					new sap.m.Button({
						text : "Embedded",
						press : switchStyle
					}),
					new sap.m.Button({
						text : "None",
						press : function() {switchModeNone(oListStandardIcon) }
					}),
					new sap.m.Button({
						text : "Single",
						press : function() {switchModeSingle(oListStandardIcon) }
					}),
					new sap.m.Button({
						text : "SingleMaster",
						press : function() {switchModeSingleMaster(oListStandardIcon) }
					}),
					new sap.m.Button({
						text : "Multi",
						press : function() {switchModeMulti(oListStandardIcon) }
					}),
					new sap.m.Button({
						text : "Delete",
						press : function() {switchModeDelete(oListStandardIcon) }
					}),
					new sap.m.Button({
						text : "Swipe",
						press : function() {switchToSwipe(oListStandardIcon) }
					}),
					new sap.m.Button({
						text : "Switch Mode Interaction",
						press : function() {switchModeInteraction(oListStandardIcon) }
					})
				]
			})
		});

		var standardListIconA = new sap.m.Page("standardListIconA", {
			title : "Standard List Icon Active",
			showNavButton : true,
			navButtonText : "Back",
			navButtonPress : function() {
				app.back();
			},
			footer : new sap.m.Bar({
				contentMiddle : [
					addFioriButton(),
					addDialogButton(),
					new sap.m.Button({
						text : "Embedded",
						press : switchStyle
					}),
					new sap.m.Button({
						text : "None",
						press : function() {switchModeNone(oListStandardIconA) }
					}),
					new sap.m.Button({
						text : "Single",
						press : function() {switchModeSingle(oListStandardIconA) }
					}),
					new sap.m.Button({
						text : "SingleMaster",
						press : function() {switchModeSingleMaster(oListStandardIconA) }
					}),
					new sap.m.Button({
						text : "Multi",
						press : function() {switchModeMulti(oListStandardIconA) }
					}),
					new sap.m.Button({
						text : "Delete",
						press : function() {switchModeDelete(oListStandardIconA) }
					}),
					new sap.m.Button({
						text : "Swipe",
						press : function() {switchToSwipe(oListStandardIconA) }
					}),
					new sap.m.Button({
						text : "Switch Mode Interaction",
						press : function() {switchModeInteraction(oListStandardIconA) }
					})
				]
			})
		});

		var standardListIconDA = new sap.m.Page("standardListIconDA", {
			title : "Standard List Icon Detail and Active",
			showNavButton : true,
			navButtonText : "Back",
			navButtonPress : function() {
				app.back();
			},
			footer : new sap.m.Bar({
				contentMiddle : [
					addFioriButton(),
					addDialogButton(),
					new sap.m.Button({
						text : "Embedded",
						press : switchStyle
					}),
					new sap.m.Button({
						text : "None",
						press : function() {switchModeNone(oListStandardIconDA) }
					}),
					new sap.m.Button({
						text : "Single",
						press : function() {switchModeSingle(oListStandardIconDA) }
					}),
					new sap.m.Button({
						text : "SingleMaster",
						press : function() {switchModeSingleMaster(oListStandardIconDA) }
					}),
					new sap.m.Button({
						text : "Multi",
						press : function() {switchModeMulti(oListStandardIconDA) }
					}),
					new sap.m.Button({
						text : "Delete",
						press : function() {switchModeDelete(oListStandardIconDA) }
					}),
					new sap.m.Button({
						text : "Swipe",
						press : function() {switchToSwipe(oListStandardIconDA) }
					}),
					new sap.m.Button({
						text : "Switch Mode Interaction",
						press : function() {switchModeInteraction(oListStandardIconDA) }
					})
				]
			})
		});

		var standardListTitle = new sap.m.Page("standardListTitle", {
			title : "Standard List Title",
			showNavButton : true,
			navButtonText : "Back",
			navButtonPress : function() {
				app.back();
			},
			footer : new sap.m.Bar({
				contentMiddle : [
					addFioriButton(),
					addDialogButton(),
					new sap.m.Button({
						text : "Embedded",
						press : switchStyle
					}),
					new sap.m.Button({
						text : "None",
						press : function() {switchModeNone(oListStandardTitle) }
					}),
					new sap.m.Button({
						text : "Single",
						press : function() {switchModeSingle(oListStandardTitle) }
					}),
					new sap.m.Button({
						text : "SingleMaster",
						press : function() {switchModeSingleMaster(oListStandardTitle) }
					}),
					new sap.m.Button({
						text : "Multi",
						press : function() {switchModeMulti(oListStandardTitle) }
					}),
					new sap.m.Button({
						text : "Delete",
						press : function() {switchModeDelete(oListStandardTitle) }
					}),
					new sap.m.Button({
						text : "Swipe",
						press : function() {switchToSwipe(oListStandardTitle) }
					}),
					new sap.m.Button({
						text : "Switch Mode Interaction",
						press : function() {switchModeInteraction(oListStandardTitle) }
					})
				]
			})
		})

		var standardListNoImage = new sap.m.Page("standardListNoImage", {
			title : "Standard List no Image",
			showNavButton : true,
			navButtonText : "Back",
			navButtonPress : function() {
				app.back();
			},
			footer : new sap.m.Bar({
				contentMiddle : [
					addFioriButton(),
					addDialogButton(),
					new sap.m.Button({
						text : "Embedded",
						press : switchStyle
					}),
					new sap.m.Button({
						text : "None",
						press : function() {switchModeNone(oListStandardNoImage) }
					}),
					new sap.m.Button({
						text : "Single",
						press : function() {switchModeSingle(oListStandardNoImage) }
					}),
					new sap.m.Button({
						text : "SingleMaster",
						press : function() {switchModeSingleMaster(oListStandardNoImage) }
					}),
					new sap.m.Button({
						text : "Multi",
						press : function() {switchModeMulti(oListStandardNoImage) }
					}),
					new sap.m.Button({
						text : "Delete",
						press : function() {switchModeDelete(oListStandardNoImage) }
					}),
					new sap.m.Button({
						text : "Swipe",
						press : function() {switchToSwipe(oListStandardNoImage) }
					}),
					new sap.m.Button({
						text : "Switch Mode Interaction",
						press : function() {switchModeInteraction(oListStandardNoImage) }
					})
				]
			})
		});

		var displayList = new sap.m.Page("displayList", {
			title : "Display list",
			showNavButton : true,
			navButtonText : "Back",
			navButtonPress : function() {
				app.back();
			},
			footer : new sap.m.Bar({
				contentMiddle : [
					addFioriButton(),
					addDialogButton(),
					new sap.m.Button({
						text : "Embedded",
						press : switchStyle
					}),
					new sap.m.Button({
						text : "None",
						press : function() {switchModeNone(oListDisplay) }
					}),
					new sap.m.Button({
						text : "Single",
						press : function() {switchModeSingle(oListDisplay) }
					}),
					new sap.m.Button({
						text : "SingleMaster",
						press : function() {switchModeSingleMaster(oListDisplay) }
					}),
					new sap.m.Button({
						text : "Multi",
						press : function() {switchModeMulti(oListDisplay) }
					}),
					new sap.m.Button({
						text : "Delete",
						press : function() {switchModeDelete(oListDisplay) }
					}),
					new sap.m.Button({
						text : "Swipe",
						press : function() {switchToSwipe(oListDisplay) }
					}),
					new sap.m.Button({
						text : "Switch Mode Interaction",
						press : function() {switchModeInteraction(oListDisplay) }
					})
				]
			})
		});

		var inputList = new sap.m.Page("inputList", {
			title : "Input List",
			showNavButton : true,
			navButtonText : "Back",
			navButtonPress : function() {
				app.back();
			},
			footer : new sap.m.Bar({
				contentMiddle : [
					addFioriButton(),
					addDialogButton(),
					new sap.m.Button({
						text : "Embedded",
						press : switchStyle
					}),
					new sap.m.Button({
						text : "None",
						press : function() {switchModeNone(oListInput) }
					}),
					new sap.m.Button({
						text : "Single",
						press : function() {switchModeSingle(oListInput) }
					}),
					new sap.m.Button({
						text : "SingleMaster",
						press : function() {switchModeSingleMaster(oListInput) }
					}),
					new sap.m.Button({
						text : "Multi",
						press : function() {switchModeMulti(oListInput) }
					}),
					new sap.m.Button({
						text : "Delete",
						press : function() {switchModeDelete(oListInput) }
					}),
					new sap.m.Button({
						text : "Swipe",
						press : function() {switchToSwipe(oListInput) }
					}),
					new sap.m.Button({
						text : "Switch Mode Interaction",
						press : function() {switchModeInteraction(oListInput) }
					})
				]
			})
		});

		var customList = new sap.m.Page("customList", {
			title : "Custom List",
			showNavButton : true,
			navButtonText : "Back",
			navButtonPress : function() {
				app.back();
			},
			footer : new sap.m.Bar({
				contentMiddle : [
					addFioriButton(),
					addDialogButton(),
					new sap.m.Button({
						text : "Embedded",
						press : switchStyle
					}),
					new sap.m.Button({
						text : "None",
						press : function() {switchModeNone(oListCustom) }
					}),
					new sap.m.Button({
						text : "Single",
						press : function() {switchModeSingle(oListCustom) }
					}),
					new sap.m.Button({
						text : "SingleMaster",
						press : function() {switchModeSingleMaster(oListCustom) }
					}),
					new sap.m.Button({
						text : "Multi",
						press : function() {switchModeMulti(oListCustom) }
					}),
					new sap.m.Button({
						text : "Delete",
						press : function() {switchModeDelete(oListCustom) }
					}),
					new sap.m.Button({
						text : "Swipe",
						press : function() {switchToSwipe(oListCustom) }
					}),
					new sap.m.Button({
						text : "Switch Mode Interaction",
						press : function() {switchModeInteraction(oListCustom) }
					})
				]
			})
		});

		var groupedList = new sap.m.Page("groupedList", {
			title : "Grouped List",
			showNavButton : true,
			navButtonText : "Back",
			navButtonPress : function() {
				app.back();
			},
			footer : new sap.m.Bar({
				contentMiddle : [
					addFioriButton(),
					addDialogButton(),
					new sap.m.Button({
						text : "Embedded",
						press : switchStyle
					})
				]
			})
		});

		var groupedNoHeaderList = new sap.m.Page("groupedNoHeaderList", {
			title : "Grouped List without Header/Footer",
			showNavButton : true,
			navButtonText : "Back",
			navButtonPress : function() {
				app.back();
			},
			footer : new sap.m.Bar({
				contentMiddle : [
					addFioriButton(),
					addDialogButton(),
					new sap.m.Button({
						text : "Embedded",
						press : switchStyle
					})
				]
			})
		});

		var selectionList = new sap.m.Page("selectionList", {
			customHeader : new sap.m.Bar({
				contentLeft: [ oButtonSelectionBack = new sap.m.Button('myButtonSelectionBack', {text:"Back", type:sap.m.ButtonType.Back, press:function() {app.back();}}) ],
				contentMiddle: [ new sap.m.Label("myBarLabel", {text: "Selection List"}) ],
				contentRight: [ new sap.m.Button('myButtonSetSelectionItem1', {text:"#1", press: setSelectionItem1}),
								new sap.m.Button('myButtonSetSelectionItem2', {text:"#2", press: setSelectionItem2}),
								new sap.m.Button('myButtonSetSelectionItem3', {text:"#3", press: setSelectionItem3}),
								new sap.m.Button('myButtonSetSelectionItem4', {text:"#4", press: setSelectionItem4}),
								new sap.m.Button('myButtonSetSelectionItem5', {text:"#5", press: setSelectionItem5}),
								new sap.m.Button('myButtonGetSelection', {text:"Get Selection", press: getSelection}),
												oButtonRemoveSelection = new sap.m.Button('myButtonRemoveSelection', {text:"Remove Selection", press: removeSelection}) ]
			}),
			footer : new sap.m.Bar({
				contentMiddle : [
					addFioriButton(),
					addDialogButton(),
					new sap.m.Button({
						text : "Embedded",
						press : switchStyle
					}),
					new sap.m.Button({
						text : "None",
						press : function() {switchModeNone(oListSelection) }
					}),
					new sap.m.Button({
						text : "Single",
						press : function() {switchModeSingle(oListSelection) }
					}),
					new sap.m.Button({
						text : "SingleLeft",
						press : function() {switchModeSingleLeft(oListSelection) }
					}),
					new sap.m.Button({
						text : "SingleMaster",
						press : function() {switchModeSingleMaster(oListSelection) }
					}),
					new sap.m.Button({
						text : "Multi",
						press : function() {switchModeMulti(oListSelection) }
					}),
					new sap.m.Button({
						text : "Delete",
						press : function() {switchModeDelete(oListSelection) }
					}),
					new sap.m.Button({
						text : "Switch Mode Interaction",
						press : function() {switchModeInteraction(oListSelection) }
					})
				]
			})
		});

		var htmlList = new sap.m.Page("htmlList", {
			title : "Html List",
			showNavButton : true,
			navButtonText : "Back",
			navButtonPress : function() {
				app.back();
			},
			footer : new sap.m.Bar({
				contentMiddle : [
					addFioriButton(),
					addDialogButton(),
					new sap.m.Button({
						text : "Embedded",
						press : switchStyle
					}),
					new sap.m.Button({
						text : "None",
						press : function() {switchModeNone(oListHtml) }
					}),
					new sap.m.Button({
						text : "Single",
						press : function() {switchModeSingle(oListHtml) }
					}),
					new sap.m.Button({
						text : "SingleMaster",
						press : function() {switchModeSingleMaster(oListHtml) }
					}),
					new sap.m.Button({
						text : "Multi",
						press : function() {switchModeMulti(oListHtml) }
					}),
					new sap.m.Button({
						text : "Delete",
						press : function() {switchModeDelete(oListHtml) }
					}),
					new sap.m.Button({
						text : "Switch Mode Interaction",
						press : function() {switchModeInteraction(oListHtml) }
					})
				]
			})
		});

		var noDataList = new sap.m.Page("noDataList", {
			title : "No Data List",
			showNavButton : true,
			navButtonText : "Back",
			navButtonPress : function() {
				app.back();
			},
			footer : new sap.m.Bar({
				contentMiddle : [
					addFioriButton(),
					addDialogButton(),
					new sap.m.Button({
						text : "Embedded",
						press : switchStyle
					}),
					new sap.m.Button({
						text : "None",
						press : function() {switchModeNone(oListNoData) }
					}),
					new sap.m.Button({
						text : "Single",
						press : function() {switchModeSingle(oListNoData) }
					}),
					new sap.m.Button({
						text : "SingleMaster",
						press : function() {switchModeSingleMaster(oListNoData) }
					}),
					new sap.m.Button({
						text : "Multi",
						press : function() {switchModeMulti(oListNoData) }
					}),
					new sap.m.Button({
						text : "Delete",
						press : function() {switchModeDelete(oListNoData) }
					}),
					new sap.m.Button({
						text : "Switch Mode Interaction",
						press : function() {switchModeInteraction(oListNoData) }
					})
				]
			})
		});

		var oSwpBusyDialog = new sap.m.BusyDialog({
			title: 'Processing...'
		});

		var swipeAction = new sap.m.Page("swipeAction", {
			title : "List Swipe Action",
			showNavButton : true,
			navButtonText : "Back",
			navButtonPress : function() {
				app.back();
			},
			content : [oSwipeList1 = new sap.m.List({
				inset : true,
				showUnread: true,
				headerText : "Dynamic Button",
				swipeContent : new sap.m.Button({
					text : "Approve",
					type : "Accept",
					press : function(e) {
						var oSwipedItem = oSwipeList1.getSwipedItem(),
							isApproved = !oSwipedItem.data("approved");

						oSwpBusyDialog.open();
						setTimeout(function() {
							oSwpBusyDialog.close();
							if (isApproved) {
								oSwipedItem.setIcon("images/candy_v_46x46.png");
							} else {
								oSwipedItem.setIcon("images/candy_x_46x46.png");
							}
							oSwipedItem.data("approved", isApproved);
							oSwipeList1.swipeOut();
						}, 1500);
					}
				}),
				swipe: function(e) {
					var oSwipedItem = e.getParameter("listItem"),
						oSwipeContent = e.getParameter("swipeContent");

					if (oSwipedItem.data("approved")) {
						oSwipeContent.setText("Disapprove").setType("Reject");
					} else  {
						oSwipeContent.setText("Approve").setType("Accept");
					}
				},
				items : [
					new sap.m.StandardListItem({
						title : "123 456",
						titleTextDirection: sap.ui.core.TextDirection.LTR,
						titleTextAlign: sap.ui.core.TextAlign.End,
						description : "SIP Telephone Set",
						info: "Today",
						infoState: "Success",
						icon: "",
						type: "Navigation",
						unread : true,
						counter: 1,
						press: handlePress
					}).data("approved", false),
					new sap.m.StandardListItem({
						title : "Tracy Thompson",
						description : "Mouse, Headphone, Keyboard",
						info: "+ 359 234 567",
						infoTextDirection: sap.ui.core.TextDirection.LTR,
						infoState: "Warning",
						icon: "",
						type: "Navigation",
						unread : true,
						counter: 3,
						press: handlePress
					}).data("approved", false),
					new sap.m.StandardListItem({
						title : "Steven John Parker",
						description : "Brilliance Monitor, Docking Station",
						info: "Yesterday",
						icon: "",
						type: "Navigation",
						unread : true,
						counter: 2,
						press: handlePress
					}).data("approved", false)
				]
			}), oSwipeList2 = new sap.m.List({
				inset : true,
				headerText : "Combined Swipe Content HBox with Images",
				footerText : "We strongly advise you to keep your luggage with you at all times. Any unattended luggage in the terminal will be removed by the security services.",
				swipeContent : new sap.m.HBox({
					items:[
						new sap.m.Image({
							src : "images/edit_48.png",
							press : function() {
								var oSwipedItem = oSwipeList2.getSwipedItem(),
									oData = oSwipedItem.getBindingContext().getObject();

								showPopup("Edit pressed for " + oData.firstName + " " + oData.lastName);
								oSwipeList2.swipeOut();
							}
						}),
						new sap.m.Image({
							src : "images/delete_48.png",
							press : function() {
								var oSwipedItem = oSwipeList2.getSwipedItem(),
									oData = oSwipedItem.getBindingContext().getObject();

								oSwipeList2.removeAggregation("items", oSwipedItem);
								oSwipeList2.swipeOut();
							}
						})
					]
				}).addStyleClass("hboxBG")
			}), oSwipeList3 = new sap.m.List({
				inset : true,
				headerText : "Swipe Event Combination",
				swipeContent : new sap.m.Button({
					text : "Swipe Button",
					type: "Reject",
					press : function(e) {
						oSwipeList3.swipeOut();
					}
				}),
				swipe: function(e) {
					var oSrcControl = e.getParameter("srcControl");
					if (oSrcControl instanceof sap.m.Button) {
						e.preventDefault();
					}
				},
				items : [new sap.m.DisplayListItem({
					label : "Label",
					value : "Test"
				}), new sap.m.InputListItem({
					label : "Slider",
					content : new sap.m.Slider({
						value: 50,
						width: "140px"
					})
				}), new sap.m.InputListItem({
					label : "Switch",
					content : new sap.m.Switch({})
				}), new sap.m.InputListItem({
					label : "Button",
					content : new sap.m.Button({
						text : "Cancel Swipe"
					})
				})]
			})]
		});


		/*
		// ================================================================================
		// create application sample for the data binding
		// ================================================================================
		*/
		jQuery.sap.require("sap.ui.model.json.JSONModel");
		// JSON sample data

		var dataOverview = {
			navigation : [ {
				title : "Standard List Thumb",
				type : "Navigation",
				press : 'standardListThumb'
			}, {
				title : "Standard List Icon",
				type : "Navigation",
				press : 'standardListIcon'
			}, {
				title : "Standard List Icon Active",
				type : "Navigation",
				press : 'standardListIconA'
			}, {
				title : "Standard List Icon Detail and Active",
				type : "Navigation",
				press : 'standardListIconDA'
			}, {
				title : "Standard List Title",
				type : "Navigation",
				press : 'standardListTitle'
			}, {
				title : "Standard List no Image",
				type : "Navigation",
				press : 'standardListNoImage'
			}, {
				title : "Display List",
				type : "Navigation",
				press : 'displayList'
			}, {
				title : "Input List",
				type : "Navigation",
				press : 'inputList'
			}, {
				title : "Custom List",
				type : "Navigation",
				press : 'customList'
			}, {
				title : "Grouped List",
				type : "Navigation",
				press : 'groupedList'
			}, {
				title : "Grouped List without Header/Footer",
				type : "Navigation",
				press : 'groupedNoHeaderList'
			}, {
				title : "Selection List",
				type : "Navigation",
				press : 'selectionList'
			}, {
				title : "Html List",
				type : "Navigation",
				press : 'htmlList'
			}, {
				title : "No Data List",
				type : "Navigation",
				press : 'noDataList'
			}, {
				title : "Swipe Action",
				type : "Navigation",
				press : 'swipeAction'
			} ]
		};

		var dataNavigation = {
			navigation : [ {
				title : "Travel Expend",
				description : "Access the travel expend workflow",
				icon : "images/placeholder_48x48.png",
				//icon : "sap-icon://favorite",
				iconInset : false,
				type : "Navigation",
				unread: true,
				counter: 123,
				selected: false,
				info: "Error message",
				infoState: "Error",
				press : 'detailPage'
			}, {
				title : "Travel and expense report",
				description : "Access travel and expense reports",
				icon : "images/placeholder_48x48.png",
				//icon : "sap-icon://database",
				iconInset : false,
				type : "Navigation",
				unread: true,
				counter: 3,
				selected: false,
				info: "Warning message",
				infoState: "Warning",
				press : 'detailPage'
			}, {
				title : "Travel Request",
				description : "Access the travel request workflow",
				icon : "sap-icon://employee",
				iconInset : false,
				type : "Navigation",
				unread: true,
				counter: 0,
				selected: false,
				info: "Success message",
				infoState: "Success",
				press : 'detailPage'
			}, {
				title : "Work Accidents",
				description : "Report your work accidents",
				icon : "sap-icon://e-care",
				iconInset : true,
				type : "Navigation",
				unread: true,
				counter: 999999999,
				selected: false,
				info: "Info message",
				press : 'detailPage'
			}, {
				title : "Travel Settings",
				description : "Change your travel workflow settings",
				icon : "sap-icon://competitor",
				iconInset : true,
				type : "Navigation",
				unread: true,
				counter: 4711,
				selected: true,
				info: "no semantic",
				press : 'detailPage'
			} ]
		};

		var dataDetail = {
			navigation : [ {
				title : "Travel Expend",
				description : "Access the travel expend workflow",
				icon : "images/placeholder_48x48.png",
				//icon : "sap-icon://favorite",
				iconInset : false,
				type : "Detail",
				unread: true,
				counter: 123,
				press: "Content pressed",
				detailPress : 'detailPage'
			}, {
				title : "Travel and expense report",
				description : "Access travel and expense reports",
				icon : "images/placeholder_48x48.png",
				//icon : "sap-icon://database",
				iconInset : false,
				type : "Detail",
				unread: true,
				counter: 4,
				press: "Content pressed",
				detailPress : 'detailPage'
			}, {
				title : "Travel Request",
				description : "Access the travel request workflow",
				icon : "sap-icon://employee",
				iconInset : false,
				type : "Detail",
				unread: true,
				press: "Content pressed",
				detailPress : 'detailPage'
			}, {
				title : "Work Accidents",
				description : "Report your work accidents",
				icon : "sap-icon://e-care",
				iconInset : true,
				type : "Detail",
				unread: true,
				press: "Content pressed",
				detailPress : 'detailPage'
			}, {
				title : "Travel Settings",
				description : "Change your travel workflow settings",
				icon : "sap-icon://competitor",
				iconInset : true,
				type : "Detail",
				unread: true,
				press: "Content pressed",
				detailPress : 'detailPage'
			} ]
		};

		var dataDetailA = {
				navigation : [ {
					title : "Travel Expend",
					description : "Access the travel expend workflow",
					icon : "images/placeholder_48x48.png",
					//icon : "sap-icon://favorite",
					iconInset : false,
					type : "Active",
					unread: true,
					counter: 123,
					info: "Error message",
					infoState: "Error",
					press: "Content pressed",
					detailPress : 'detailPage'
				}, {
					title : "Travel and expense report",
					description : "Access travel and expense reports",
					icon : "images/placeholder_48x48.png",
					//icon : "sap-icon://database",
					iconInset : false,
					type : "Active",
					unread: true,
					counter: 4,
					info: "Warning message",
					infoState: "Warning",
					press: "Content pressed",
					detailPress : 'detailPage'
				}, {
					title : "Travel Request",
					description : "Access the travel request workflow",
					icon : "sap-icon://employee",
					iconInset : false,
					type : "Active",
					unread: true,
					info: "Success message",
					infoState: "Success",
					press: "Content pressed",
					detailPress : 'detailPage'
				}, {
					title : "Work Accidents",
					description : "Report your work accidents",
					icon : "sap-icon://e-care",
					iconInset : true,
					type : "Active",
					unread: true,
					press: "Content pressed",
					detailPress : 'detailPage'
				}, {
					title : "Travel Settings",
					description : "Change your travel workflow settings",
					icon : "sap-icon://competitor",
					iconInset : true,
					type : "Active",
					unread: true,
					press: "Content pressed",
					detailPress : 'detailPage'
				} ]
			};

		var dataDetailDA = {
				navigation : [ {
					title : "Travel Expend",
					description : "Access the travel expend workflow",
					icon : "images/placeholder_48x48.png",
					//icon : "sap-icon://favorite",
					iconInset : false,
					type : "DetailAndActive",
					unread: true,
					info: "Error message",
					infoState: "Error",
					press: "Content pressed",
					detailPress : 'detailPage'
				}, {
					title : "Travel and expense report",
					description : "Access travel and expense reports",
					icon : "images/placeholder_48x48.png",
					//icon : "sap-icon://database",
					iconInset : false,
					type : "DetailAndActive",
					unread: true,
					info: "Warning message",
					infoState: "Warning",
					press: "Content pressed",
					detailPress : 'detailPage'
				}, {
					title : "Travel Request",
					description : "Access the travel request workflow",
					icon : "sap-icon://employee",
					iconInset : false,
					type : "DetailAndActive",
					unread: true,
					info: "Success message",
					infoState: "Success",
					press: "Content pressed",
					detailPress : 'detailPage'
				}, {
					title : "Work Accidents",
					description : "Report your work accidents",
					icon : "sap-icon://e-care",
					iconInset : true,
					type : "DetailAndActive",
					unread: true,
					press: "Content pressed",
					detailPress : 'detailPage'
				}, {
					title : "Travel Settings",
					description : "Change your travel workflow settings",
					icon : "sap-icon://competitor",
					iconInset : true,
					type : "DetailAndActive",
					unread: true,
					press: "Content pressed",
					detailPress : 'detailPage'
				} ]
			};

		var dataHTML = {
				navigation : [ {
					firstName : "Karl",
					lastName : "Schmidt",
					age : "26",
					city : "Berlin",
					type : "Navigation",
					unread: true,
					press: "detailPage"
				}, {
					firstName : "Susanne",
					lastName : "Bold",
					age : "28",
					city : "New York",
					type : "Navigation",
					unread: true,
					press: "detailPage"
				},{
					firstName : "Michael",
					lastName : "Maier",
					age : "24",
					city : "Walldorf",
					type : "Navigation",
					unread: true,
					press: "detailPage"
				}, {
					firstName : "Franziska",
					lastName : "Kranz",
					age : "48",
					city : "Stuttgart",
					type : "Navigation",
					unread: true,
					press: "detailPage"
				},{
					firstName : "Phil",
					lastName : "Duncan",
					age : "35",
					city : "Los Angeles",
					type : "Navigation",
					unread: true,
					press: "detailPage"
				} ]
			};


		/*
		// ================================================================================
		// create templates for the different lists (visible content of each list)
		// ================================================================================
		*/
		var oItemTemplateOverview = new sap.m.StandardListItem({
			title : "{title}",
			type : "{type}",
			unread: "{unread}",
			press : handlePress
		});

		var oItemTemplateStandardThumb = new sap.m.StandardListItem({
			title : "{title}",
			description : "{description}",
			icon : "{icon}",
			activeIcon: "{activeIcon}",
			iconInset : "{iconInset}",
			type : "{type}",
			unread: "{unread}",
			counter: "{counter}",
			selected: "{selected}",
			info: "{info}",
			infoState: "{infoState}",
			press : handlePress
		});

		var oItemTemplateStandardIcon = new sap.m.StandardListItem({
			title : "{title}",
			description : "{description}",
			icon : "{icon}",
			activeIcon: "{activeIcon}",
			iconInset : "{iconInset}",
			type : "{type}",
			unread: "{unread}",
			counter: "{counter}",
			info: "{info}",
			infoState: "{infoState}",
			detailPress : handleDetailPress,
			press: handlePress
		});

		var oItemTemplateStandardTitle = new sap.m.StandardListItem({
			title : "{title}",
			info : "{info}",
			icon : "{icon}",
			iconInset : "{iconInset}",
			infoState: "{infoState}",
			activeIcon: "{activeIcon}",
			unread: "{unread}",
			press : handlePress
		});

		var oItemTemplateStandardNoImage = new sap.m.StandardListItem({
			title : "{title}",
			description : "{description}",
			type : "{type}",
			unread: "{unread}",
			press : handlePress
		});

		var oItemTemplateDisplay = new sap.m.DisplayListItem({
			label : "{title}",
			value : "{description}",
			type : "{type}",
			unread: "{unread}",
			press : handlePress
		});

		var oItemTemplateInput = new sap.m.InputListItem({
			label : "{title}",
			type : "{type}",
			unread: "{unread}",
			content : new sap.m.Input({
				type : "Number",
				placeholder : "Number"
			}),
			press : handlePress
		});

		var oItemTemplateCustom = new sap.m.CustomListItem({
			type : "{type}",
			unread: "{unread}",
			content : new sap.m.Button({
				text : "{title}",
				width : "100%",
				icon : "./images/action.png",
				type : sap.m.ButtonType.Reject
			}),
			press : handlePress
		});

		var oItemTemplateHtml = new sap.m.CustomListItem({
			unread: "{unread}",
			content: new sap.ui.core.HTML({
				content: { parts: [
									{path: "firstName"},
									{path: "lastName"},
									{path: "age"},
									{path: "city"}
								],
				formatter: function(firstName, lastName, age, city) {
						return "<div><div>Name: " + firstName + " " + lastName
						+ "</div><div>Age: " + age +"</div><div>City: " + city +"</div></div>";
				}
				}}),
			type : "{type}",
			press : handlePress
		});

		var oItemTemplateSelection = new sap.m.StandardListItem({
			title : "{title}",
			description : "{description}",
			icon : "{icon}",
			activeIcon: "{activeIcon}",
			type : "{type}",
			unread: "{unread}",
			press : handlePress
		})


		/*
		// ================================================================================
		// create the list objects for the different pages
		// ================================================================================
		*/
		var oListOverview = new sap.m.List({
			id : "sapMList001",
			inset : false,
			headerText : "List Overview",
			footerText : "These are just some list examples and this won't show all possible combinations."
		});

		var oListStandardThumb = new sap.m.List(
				{
					inset : false,
					showUnread: true,
					backgroundDesign: "Transparent",
					'delete': deleteItem,
					headerText : "Travel [StandardListThumb]",
					footerText : "We strongly advise you to keep your luggage with you at all times. Any unattended luggage in the terminal will be removed by the security services."
				});

		var oListStandardIcon = new sap.m.List(
				{
					inset : false,
					showUnread: true,
					'delete': deleteItem,
					headerText : "Travel [StandardListIcon]",
					footerText : "We strongly advise you to keep your luggage with you at all times. Any unattended luggage in the terminal will be removed by the security services."
				});

		var oListStandardIconA = new sap.m.List(
				{
					inset : false,
					//showUnread: true,
					'delete': deleteItem,
					headerText : "Travel [StandardListIconA]",
					footerText : "We strongly advise you to keep your luggage with you at all times. Any unattended luggage in the terminal will be removed by the security services."
				});

		var oListStandardIconDA = new sap.m.List(
				{
					inset : false,
					//showUnread: true,
					'delete': deleteItem,
					headerText : "Travel [StandardListIconDA]",
					footerText : "We strongly advise you to keep your luggage with you at all times. Any unattended luggage in the terminal will be removed by the security services."
				});

		var oListStandardTitle = new sap.m.List(
				{
					inset : false,
					//showUnread: true,
					'delete': deleteItem,
					headerText : "Travel [StandardListTitle]",
					footerText : "We strongly advise you to keep your luggage with you at all times. Any unattended luggage in the terminal will be removed by the security services."
				});

		var oListStandardNoImage = new sap.m.List(
				{
					inset : false,
					//showUnread: true,
					'delete': deleteItem,
					headerText : "Travel [StandardListNoImage]",
					footerText : "We strongly advise you to keep your luggage with you at all times. Any unattended luggage in the terminal will be removed by the security services."
				});

		var oListDisplay = new sap.m.List(
				{
					inset : false,
					showUnread: true,
					'delete': deleteItem,
					headerText : "Travel [DisplayList]",
					footerText : "We strongly advise you to keep your luggage with you at all times. Any unattended luggage in the terminal will be removed by the security services."
				});

		var oListInput = new sap.m.List(
				{
					inset : false,
					//showUnread: true,
					'delete': deleteItem,
					headerText : "Travel [InputList]",
					footerText : "We strongly advise you to keep your luggage with you at all times. Any unattended luggage in the terminal will be removed by the security services."
				});

		var oListCustom = new sap.m.List(
				{
					inset : false,
					//showUnread: true,
					showSeparators: "None",
					'delete': deleteItem,
					headerText : "Travel [CustomList]",
					footerText : "We strongly advise you to keep your luggage with you at all times. Any unattended luggage in the terminal will be removed by the security services."
				});

		var oListStandardThumbNoHeader = new sap.m.List(
				{
					showUnread: true,
					inset : false
				});

		var oListStandardIconNoHeader = new sap.m.List(
				{
					showUnread: true,
					inset : false
				});

		var oListStandardIconANoHeader = new sap.m.List(
				{
					showUnread: true,
					inset : false
				});

		var oListStandardIconDANoHeader = new sap.m.List(
				{
					showUnread: true,
					inset : false
				});

		var oListStandardTitleNoHeader = new sap.m.List(
				{
					showUnread: true,
					inset : false
				});

		var oListStandardNoImageNoHeader = new sap.m.List(
				{
					showUnread: true,
					inset : false
				});

		var oListDisplayNoHeader = new sap.m.List(
				{
					showUnread: true,
					inset : false
				});

		var oListInputNoHeader = new sap.m.List(
				{
					showUnread: true,
					inset : false
				});

		var oListCustomNoHeader = new sap.m.List(
				{
					showUnread: true,
					inset : false
				});

		var oListSelection = new sap.m.List(
				{
					showUnread: true,
					inset : false,
					'delete': deleteItem,
					headerText : "Travel [List-Mode: Single]",
					footerText : "We strongly advise you to keep your luggage with you at all times. Any unattended luggage in the terminal will be removed by the security services.",
					mode : sap.m.ListMode.None
				});

		var oListHtml = new sap.m.List(
				{
					showUnread: true,
					inset : false,
					'delete': deleteItem,
					headerText : "Travel [HtmlList]",
					footerText : "We strongly advise you to keep your luggage with you at all times. Any unattended luggage in the terminal will be removed by the security services."
				});

		var oListNoData = new sap.m.List(
				{
					inset : false,
					showNoData: true,
					showSeparators: "None",
					'delete': deleteItem,
					headerText : "Travel [No Data List]",
					footerText : "We strongly advise you to keep your luggage with you at all times. Any unattended luggage in the terminal will be removed by the security services."
				});

		var oListStandardThumbGroup = oListStandardThumb.clone();
		var oListStandardIconGroup = oListStandardIcon.clone();
		var oListStandardIconAGroup = oListStandardIconA.clone();
		var oListStandardIconDAGroup = oListStandardIconDA.clone();
		var oListStandardTitleGroup = oListStandardTitle.clone();
		var oListStandardNoImageGroup = oListStandardNoImage.clone();
		var oListDisplayGroup = oListDisplay.clone();
		var oListInputGroup = oListInput.clone();
		var oListCustomGroup = oListCustom.clone();

		/*
		// ================================================================================
		// bind data to the different lists
		// ================================================================================
		*/
		bindListData(dataOverview, oItemTemplateOverview, oListOverview);
		bindListData(dataNavigation, oItemTemplateStandardThumb, oListStandardThumb);
		bindListData(dataDetail, oItemTemplateStandardIcon, oListStandardIcon);
		bindListData(dataDetailA, oItemTemplateStandardIcon, oListStandardIconA);
		bindListData(dataDetailDA, oItemTemplateStandardIcon, oListStandardIconDA);
		bindListData(dataNavigation, oItemTemplateStandardTitle, oListStandardTitle);
		bindListData(dataNavigation, oItemTemplateStandardNoImage, oListStandardNoImage);
		bindListData(dataNavigation, oItemTemplateDisplay, oListDisplay);
		bindListData(dataNavigation, oItemTemplateInput, oListInput);
		bindListData(dataNavigation, oItemTemplateCustom, oListCustom);
		bindListData(dataHTML, oItemTemplateHtml, oListHtml);
		bindListData(dataHTML, oItemTemplateHtml, oSwipeList2);

		bindListData(dataNavigation, oItemTemplateStandardThumb, oListStandardThumbGroup);
		bindListData(dataDetail, oItemTemplateStandardIcon, oListStandardIconGroup);
		bindListData(dataDetailA, oItemTemplateStandardIcon, oListStandardIconAGroup);
		bindListData(dataDetailDA, oItemTemplateStandardIcon, oListStandardIconDAGroup);
		bindListData(dataNavigation, oItemTemplateStandardTitle, oListStandardTitleGroup);
		bindListData(dataNavigation, oItemTemplateStandardNoImage, oListStandardNoImageGroup);
		bindListData(dataNavigation, oItemTemplateDisplay, oListDisplayGroup);
		bindListData(dataNavigation, oItemTemplateInput, oListInputGroup);
		bindListData(dataNavigation, oItemTemplateCustom, oListCustomGroup);



		bindListData(dataNavigation, oItemTemplateStandardThumb, oListStandardThumbNoHeader);
		bindListData(dataDetail, oItemTemplateStandardIcon, oListStandardIconNoHeader);
		bindListData(dataDetailA, oItemTemplateStandardIcon, oListStandardIconANoHeader);
		bindListData(dataDetailDA, oItemTemplateStandardIcon, oListStandardIconDANoHeader);
		bindListData(dataNavigation, oItemTemplateStandardTitle, oListStandardTitleNoHeader);
		bindListData(dataNavigation, oItemTemplateStandardNoImage, oListStandardNoImageNoHeader);
		bindListData(dataNavigation, oItemTemplateDisplay, oListDisplayNoHeader);
		bindListData(dataNavigation, oItemTemplateInput, oListInputNoHeader);
		bindListData(dataNavigation, oItemTemplateCustom, oListCustomNoHeader);

		bindListData(dataNavigation, oItemTemplateSelection, oListSelection);


		/*
		// ================================================================================
		// add different lists to their content
		// ================================================================================
		*/
		listOverview.addContent(oListOverview);

		standardListThumb.addContent(oListStandardThumb);

		var actionList = new sap.m.List();
		var actionListItem = new sap.m.ActionListItem({id: "actionListItem", text: "Add Item to Control", press: function(){
			var addedItem = new sap.m.StandardListItem({
				title : "Travel Expend",
				description : "Access the travel expend workflow",
				icon : "images/travel_expend.png",
				activeIcon: "images/travel_expend_grey.png",
				iconInset : false,
				type : "Navigation",
				unread: true,
				counter: 123,
				selected: false,
				info: "Error message",
				infoState: "Error",
				})
			oListStandardThumb.addItem(addedItem);
		}});
		var actionListItem2 = new sap.m.ActionListItem({id: "actionListItem2", text: "Add Item to Model", press: function(){
			(oListStandardThumb.getModel()).getData().navigation[(oListStandardThumb.getModel()).getData().navigation.length] = (oListStandardThumb.getModel()).getData().navigation[0];
			(oListStandardThumb.getModel()).setData((oListStandardThumb.getModel()).getData());
		}});

		actionList.addItem(actionListItem);
		actionList.addItem(actionListItem2);

		standardListThumb.addContent(actionList);

		standardListIcon.addContent(oListStandardIcon);
		standardListIconA.addContent(oListStandardIconA);
		standardListIconDA.addContent(oListStandardIconDA);
		standardListTitle.addContent(oListStandardTitle);
		standardListNoImage.addContent(oListStandardNoImage);
		displayList.addContent(oListDisplay);
		inputList.addContent(oListInput);
		customList.addContent(oListCustom);
		htmlList.addContent(oListHtml);
		noDataList.addContent(oListNoData);

		groupedList.addContent(oListStandardThumbGroup);
		groupedList.addContent(oListStandardIconGroup);
		groupedList.addContent(oListStandardIconAGroup);
		groupedList.addContent(oListStandardIconDAGroup);
		groupedList.addContent(oListStandardTitleGroup);
		groupedList.addContent(oListStandardNoImageGroup);
		groupedList.addContent(oListDisplayGroup);
		groupedList.addContent(oListInputGroup);
		groupedList.addContent(oListCustomGroup);

		groupedNoHeaderList.addContent(oListStandardThumbNoHeader);
		groupedNoHeaderList.addContent(oListStandardIconNoHeader);
		groupedNoHeaderList.addContent(oListStandardIconANoHeader);
		groupedNoHeaderList.addContent(oListStandardIconDANoHeader);
		groupedNoHeaderList.addContent(oListStandardTitleNoHeader);
		groupedNoHeaderList.addContent(oListStandardNoImageNoHeader);
		groupedNoHeaderList.addContent(oListDisplayNoHeader);
		groupedNoHeaderList.addContent(oListInputNoHeader);
		groupedNoHeaderList.addContent(oListCustomNoHeader);

		selectionList.addContent(oListSelection);


		/*
		// ================================================================================
		// application helper functions
		// ================================================================================
		*/
		function bindListData(data, itemTemplate, list) {
			var oModel = new sap.ui.model.json.JSONModel();
			// set the data for the model
			oModel.setData(data);
			// set the model to the list
			list.setModel(oModel);

			// create a CustomData template, set its key to "answer" and bind its value to the answer data
			var oDataTemplate = new sap.ui.core.CustomData({
				key : "xyz"
			});

			oDataTemplate.bindProperty("value", "press");


			// add the CustomData template to the item template
			itemTemplate.addCustomData(oDataTemplate);

			var oDataTemplate2 = new sap.ui.core.CustomData({
				key : "abc"
			});

			oDataTemplate2.bindProperty("value", "detailPress");


			// add the CustomData template to the item template
			itemTemplate.addCustomData(oDataTemplate2);

			// bind Aggregation
			list.bindAggregation("items", "/navigation", itemTemplate);
		}

		function handlePress(e) {
			this.setUnread(false);
			if(this.data("xyz") && "Content pressed" != this.data("xyz") )
				app.to(this.data("xyz"));
			else{
				showPopup();
			}

		}

		function showPopup(message)
		{
			if(!message)
				message = "List item was tapped!";
			var oMessageDialog1 = new sap.m.Dialog({
				title: "Important Message",
				content: [
					new sap.ui.core.HTML({content:"<p>" + message + "<p>"}),
				],
				leftButton:
					new sap.m.Button({
						text: "Reject",
						type: sap.m.ButtonType.Reject,
						press : function() {
							oMessageDialog1.close();
						}
					}),
				rightButton:
					new sap.m.Button({
						text: "Accept",
						type: sap.m.ButtonType.Accept,
						press : function() {
							oMessageDialog1.close();
						}
					}),
				type: sap.m.DialogType.Message
			});
			oMessageDialog1.open();
		}

		function handleDetailPress(e) {
			app.to(this.data("abc"));
		}

		function switchStyle() {
			var listArray = jQuery(".sapMList").control();
			var inset = !listArray[listArray.length - 1].getInset();
			for ( var i = 0; i < listArray.length; i++) {
				listArray[i].setInset(inset);
			}
			if(app.getCurrentPage()._refreshIScroll)
				app.getCurrentPage()._refreshIScroll();
		}

		function deleteItem(oEvent)
		{
			var model = oEvent.mParameters.listItem.getModel();

			var deleteId = model.getProperty("", oEvent.mParameters.listItem.getBindingContext());
			var data = model.getData().navigation;
			jQuery.each(data,function(iIndex, oEntry){

				if (oEntry == deleteId) {
				data.splice(iIndex, 1);
				return false;
				}
		});
		model.setData(model.getData());
		}
		
		function showDialog(oPage, oList){
			if(!oPage._dialog){
				var list = oList.clone();
				oPage._dialog = new sap.m.Dialog({
					title: oPage.getTitle(),
					content: [
						list
					],
					beginButton:
						new sap.m.Button({
							text: "Close",
							press : function() {
								oPage._dialog.close();
							}
						})
				});
			}
			oPage._dialog.open();
		}

		/*
		// ================================================================================
		// selection list: setter/getter functions - toggle between true and false
		// ================================================================================
		*/
		function setSelectionItem1() {
			var aItems = oListSelection.getItems();
			if (oListSelection.getMode() == sap.m.ListMode.SingleSelect || oListSelection.getMode() == sap.m.ListMode.SingleSelectLeft || oListSelection.getMode() == sap.m.ListMode.SingleSelectMaster) {
				aItems[0].setSelected(true);
			}
			if (oListSelection.getMode() == sap.m.ListMode.MultiSelect){
				aItems[0].setSelected( (!aItems[0]._checkBox.getSelected()) );
			}
		}

		function setSelectionItem2() {
			var aItems = oListSelection.getItems();
			if (oListSelection.getMode() == sap.m.ListMode.SingleSelect || oListSelection.getMode() == sap.m.ListMode.SingleSelectLeft|| oListSelection.getMode() == sap.m.ListMode.SingleSelectMaster) {
				aItems[1].setSelected(true);
			}
			if (oListSelection.getMode() == sap.m.ListMode.MultiSelect){
				aItems[1].setSelected( (!aItems[1]._checkBox.getSelected()) );
			}
		}

		function setSelectionItem3() {
			var aItems = oListSelection.getItems();
			if (oListSelection.getMode() == sap.m.ListMode.SingleSelect || oListSelection.getMode() == sap.m.ListMode.SingleSelectLeft|| oListSelection.getMode() == sap.m.ListMode.SingleSelectMaster) {
				aItems[2].setSelected(true);
			}
			if (oListSelection.getMode() == sap.m.ListMode.MultiSelect){
				aItems[2].setSelected( (!aItems[2]._checkBox.getSelected()) );
			}
		}

		function setSelectionItem4() {
			var aItems = oListSelection.getItems();
			if (oListSelection.getMode() == sap.m.ListMode.SingleSelect || oListSelection.getMode() == sap.m.ListMode.SingleSelectLeft|| oListSelection.getMode() == sap.m.ListMode.SingleSelectMaster) {
				aItems[3].setSelected(true);
			}
			if (oListSelection.getMode() == sap.m.ListMode.MultiSelect){
				aItems[3].setSelected( (!aItems[3]._checkBox.getSelected()) );
			}
		}

		function setSelectionItem5() {
			var aItems = oListSelection.getItems();
			if (oListSelection.getMode() == sap.m.ListMode.SingleSelect || oListSelection.getMode() == sap.m.ListMode.SingleSelectLeft|| oListSelection.getMode() == sap.m.ListMode.SingleSelectMaster) {
				aItems[4].setSelected(true);
			}
			if (oListSelection.getMode() == sap.m.ListMode.MultiSelect){
				aItems[4].setSelected( (!aItems[4]._checkBox.getSelected()) );
			}
		}

		function getSelection() {
			if (oListSelection.getMode() == sap.m.ListMode.SingleSelect || oListSelection.getMode() == sap.m.ListMode.SingleSelectLeft|| oListSelection.getMode() == sap.m.ListMode.SingleSelectMaster) {
				var oResult = oListSelection.getSelectedItem();
				showPopup(oResult);
			}
			if (oListSelection.getMode() == sap.m.ListMode.MultiSelect){
				var aItems = oListSelection.getSelectedItems();
				var sResult = "Count: " + aItems.length + "\n";
				for ( var i = 0; i < aItems.length; i++) {
					sResult = sResult + i.toString() + ": " + aItems[i] + "\n";
				}
				showPopup(sResult);
			}
		}


		function removeSelection() {
			oListSelection.removeSelections();
		}


		/*
		// ================================================================================
		// selection list: functions to switch list selection mode
		// ================================================================================
		*/
		function switchModeNone(oList) {
			oList.setHeaderText("Travel [List-Mode: None]");
			oList.setMode(sap.m.ListMode.None)
			}

		function switchModeSingle(oList) {
			oList.setHeaderText("Travel [List-Mode: Single]");
			oList.setMode(sap.m.ListMode.SingleSelect);
		}

		function switchModeSingleLeft(oList) {
			oList.setHeaderText("Travel [List-Mode: SingleLeft]");
			oList.setMode(sap.m.ListMode.SingleSelectLeft);
		}

		function switchModeSingleMaster(oList) {
			oList.setHeaderText("Travel [List-Mode: SingleMaster]");
			oList.setMode(sap.m.ListMode.SingleSelectMaster);
		}

		function switchModeMulti(oList) {
			oList.setHeaderText("Travel [List-Mode: Multi]");
			oList.setMode(sap.m.ListMode.MultiSelect)
		}

		function switchModeDelete(oList) {
			oList.setHeaderText("Travel [List-Mode: Delete]");
			oList.setMode(sap.m.ListMode.Delete)
		}

		function switchToSwipe(oList) {
			if (!oList.data("swipe")) {
				var btnTypes = ["Default", "Back", "Accept", "Reject", "Up"],
					btnType = btnTypes[Math.floor(Math.random() * btnTypes.length)];

				oList.setSwipeContent(new sap.m.Button({
					text : "Swipe Btn " + btnType,
					type : btnType,
					press : function() {
						var li = oList.getSwipedItem();
						showPopup(li.getDomRef().innerText);
						oList.swipeOut();
					}
				}));
				oList.data("swipe", true);
				showPopup("Swipe left on list to see swipe content!!");
			} else {
				oList.swipeOut();
			}
		}

		function switchModeInteraction(oList) {
			oList.setIncludeItemInSelection(!oList.getIncludeItemInSelection());
			var aItems = oList.getItems();
			for ( var i = 0; i < aItems.length; i++) {
				aItems[i]._includeItemInSelection = oList.getIncludeItemInSelection();
			}
		}

		function switchSeparators(oEvent, oList) {
			oList.setShowSeparators(oEvent.getParameter("selectedItem").getText());
		}

		function switchBGDesign(oEvent, oList) {
			oList.setBackgroundDesign(oEvent.getParameter("selectedItem").getText());
		}

		// ================================================================================

			app.addPage(listOverview).addPage(detailPage).addPage(standardListThumb).addPage(standardListIcon).addPage(standardListIconA).addPage(standardListIconDA).addPage(standardListTitle).addPage(standardListNoImage)
				.addPage(displayList).addPage(inputList).addPage(customList).addPage(groupedList).addPage(groupedNoHeaderList).addPage(selectionList).addPage(htmlList).addPage(noDataList).addPage(swipeAction);
		app.setInitialPage("listOverview");
		// app.placeAt("body");
  	},
	
	renderer: {},
	
	afterDesignStudioUpdate : function() {
		var that = this;
		
	},
});
})();