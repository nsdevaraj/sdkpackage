/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.TimelineRenderer");sap.suite.ui.commons.TimelineRenderer={};
sap.suite.ui.commons.TimelineRenderer.render=function(r,c){if(!c.getVisible()){return}var C=c._outputItem;r.write("<div ");r.writeControlData(c);r.addClass("sapSuiteUiCommonsTimeline");if(c.getWidth()){r.addStyle("width",c.getWidth())}r.writeStyles();r.writeClasses();r.write(">");r.renderControl(c._headerBar);r.renderControl(c._headerInfoBar);r.write("<div ");r.addClass("sapSuiteUiCommonsTimelineContents");r.addClass("sapSuiteUiCommonsTimelineScrollV");r.addClass("sapSuiteUiCommonsTimelineScroll");r.writeClasses();r.write(">");r.write("<div ");r.writeAttribute("id",c.getId()+"-scroll");r.addClass("sapSuiteUiCommonsTimelineScroll");r.writeStyles();r.writeClasses();r.write(">");if(C.length>0){for(var i=0;i<C.length;i++){r.renderControl(C[i])}if(c._showMore){r.write("<div tabindex='-1'");r.writeAttribute("id",c.getId()+"-after");r.write("></div>");this.renderGetMore(r,c)}}else{if(c._finishLoading){r.renderControl(c._emptyList)}}r.write("</div>");r.write("</div>");r.write("</div>")};
sap.suite.ui.commons.TimelineRenderer.renderGetMore=function(r,c){r.write("<li ");r.addClass("sapSuiteUiCommonsTimelineGetMore");r.writeClasses();r.write(">");r.write("<div ");r.addClass("sapSuiteUiCommonsTimelineGetMoreBar");r.writeClasses();r.write(">");r.write("</div>");r.write("<div ");r.addClass("sapSuiteUiCommonsTimelineGetMoreBox");r.writeClasses();r.write(">");r.renderControl(c._getMoreButton);r.write("</div>");r.write("</li>")};
