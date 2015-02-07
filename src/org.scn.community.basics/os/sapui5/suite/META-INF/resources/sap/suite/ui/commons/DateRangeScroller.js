/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.DateRangeScroller");jQuery.sap.require("sap.suite.ui.commons.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.suite.ui.commons.DateRangeScroller",{metadata:{library:"sap.suite.ui.commons",associations:{"ariaDescribedBy":{type:"sap.ui.core.Control",multiple:true,singularName:"ariaDescribedBy"},"ariaLabelledBy":{type:"sap.ui.core.Control",multiple:true,singularName:"ariaLabelledBy"}},events:{"change":{}}}});sap.suite.ui.commons.DateRangeScroller.M_EVENTS={'change':'change'};jQuery.sap.require("sap.ui.commons.Label");jQuery.sap.require("sap.ui.core.format.DateFormat");jQuery.sap.require("sap.suite.ui.commons.util.DateUtils");(function(){var D="d";var W="w";var M="m";var Y="y";var C="c";var w=7;sap.suite.ui.commons.DateRangeScroller.getFormattedDate=function(r,d,o){var a;var f;switch(r){case(D):a=o||sap.ui.core.format.DateFormat.getDateInstance({pattern:"MMMM d, YYYY"});f=a.format(d.startDate,false);break;case(W):case(C):var s=o||sap.ui.core.format.DateFormat.getDateInstance({pattern:'MMMM d'});var e=o||sap.ui.core.format.DateFormat.getDateInstance({pattern:'MMMM d, YYYY'});if(d.startDate.getYear()!==d.endDate.getYear()){s=e}else if(d.startDate.getMonth()===d.endDate.getMonth()){e=o||sap.ui.core.format.DateFormat.getDateInstance({pattern:'d, YYYY'})}var S=s.format(d.startDate,false);var E=e.format(d.endDate,false);f=S+" - "+E;break;case(M):a=o||sap.ui.core.format.DateFormat.getDateInstance({pattern:'MMMM YYYY'});f=a.format(d.startDate,false);break;case(Y):a=o||sap.ui.core.format.DateFormat.getDateInstance({pattern:'YYYY'});f=a.format(d.startDate,false);break;default:f=d.startDate+" - "+d.endDate;break}return f};sap.suite.ui.commons.DateRangeScroller.updateDateRangeValue=function(r,d,R,o){R.setText(sap.suite.ui.commons.DateRangeScroller.getFormattedDate(r,d,o));if(R.isActive()){R.rerender()}};sap.suite.ui.commons.DateRangeScroller.adjustDateByStep=function(d,s){if(s===0){return}d.setDate(d.getDate()+s)};sap.suite.ui.commons.DateRangeScroller.adjustRangeByStep=function(r,s){var S=r.startDate;var e=r.endDate;S.setDate(S.getDate()+s);e.setDate(e.getDate()+s)};sap.suite.ui.commons.DateRangeScroller.isValidDuration=function(d,u){var v=false;if(d===undefined){v=true}else if(!isNaN(d)&&isFinite(d)){if((d>=1)&&(!u||d<=u)){v=true}}if(!v){jQuery.sap.log.error("DateRangeScroller duration value ='"+d+"' is invalid.")}return v};sap.suite.ui.commons.DateRangeScroller.prototype.init=function(){this._sRangeType=D;this._iCustomDuration=1;this._oDateFormat=null;this._oDateRangeLabel=new sap.ui.commons.Label(this.getId()+"-dateRangeLabel",{labelFor:this.getId()});this._oDateRangeLabel.addStyleClass("sapSuiteUiCommonsDateRangeScrollerLabel");var s=new Date();sap.suite.ui.commons.util.DateUtils.resetDateToStartOfDay(s);var e=new Date();sap.suite.ui.commons.util.DateUtils.resetDateToEndOfDay(e);this._oDateRange={startDate:s,endDate:e};sap.suite.ui.commons.DateRangeScroller.updateDateRangeValue(D,this._oDateRange,this._oDateRangeLabel,this._oDateFormat)};sap.suite.ui.commons.DateRangeScroller.prototype.setDateRangeDay=function(i){if(sap.suite.ui.commons.util.DateUtils.isValidDate(i)){this._oDateRange.startDate.setTime(i.getTime());this._oDateRange.endDate.setTime(i.getTime());sap.suite.ui.commons.util.DateUtils.resetDateToStartOfDay(this._oDateRange.startDate);sap.suite.ui.commons.util.DateUtils.resetDateToEndOfDay(this._oDateRange.endDate);sap.suite.ui.commons.DateRangeScroller.updateDateRangeValue(D,this._oDateRange,this._oDateRangeLabel,this._oDateFormat);this._sRangeType=D}return this};sap.suite.ui.commons.DateRangeScroller.prototype.setDateRangeWeek=function(i,s){var d=w;var f=1;if(s){d=s.duration;f=s.firstDayOfWeek}if(d===undefined){d=w}else if(d&&!isNaN(d)){d=parseInt(d,10)}if(f===undefined){f=1}else if(f&&!isNaN(f)){f=parseInt(f,10)}if((f===null)||f===""||isNaN(f)||f<0||f>6){jQuery.sap.log.error("DateRangeScroller oSettings.firstDayOfWeek value ='"+s.firstDayOfWeek+"' is invalid.")}else if(sap.suite.ui.commons.util.DateUtils.isValidDate(i)&&sap.suite.ui.commons.DateRangeScroller.isValidDuration(d,w)){this._oDateRange.startDate.setTime(i.getTime());this._oDateRange.endDate.setTime(i.getTime());var a=d;var b=f;sap.suite.ui.commons.util.DateUtils.resetDateToStartOfWeek(this._oDateRange.startDate,f);sap.suite.ui.commons.util.DateUtils.resetDateToEndOfWeek(this._oDateRange.endDate,{iDuration:a,iFirstDayOfWeek:b});sap.suite.ui.commons.DateRangeScroller.updateDateRangeValue(W,this._oDateRange,this._oDateRangeLabel,this._oDateFormat);this._sRangeType=W}return this};sap.suite.ui.commons.DateRangeScroller.prototype.setDateRangeMonth=function(i){if(sap.suite.ui.commons.util.DateUtils.isValidDate(i)){this._oDateRange.startDate.setTime(i.getTime());this._oDateRange.endDate.setTime(i.getTime());sap.suite.ui.commons.util.DateUtils.resetDateToStartOfMonth(this._oDateRange.startDate);sap.suite.ui.commons.util.DateUtils.resetDateToEndOfMonth(this._oDateRange.endDate);sap.suite.ui.commons.DateRangeScroller.updateDateRangeValue(M,this._oDateRange,this._oDateRangeLabel,this._oDateFormat);this._sRangeType=M}return this};sap.suite.ui.commons.DateRangeScroller.prototype.setDateRangeYear=function(i){if(sap.suite.ui.commons.util.DateUtils.isValidDate(i)){this._oDateRange.startDate.setTime(i.getTime());this._oDateRange.endDate.setTime(i.getTime());sap.suite.ui.commons.util.DateUtils.resetDateToStartOfYear(this._oDateRange.startDate);sap.suite.ui.commons.util.DateUtils.resetDateToEndOfYear(this._oDateRange.endDate);sap.suite.ui.commons.DateRangeScroller.updateDateRangeValue(Y,this._oDateRange,this._oDateRangeLabel,this._oDateFormat);this._sRangeType=Y}return this};sap.suite.ui.commons.DateRangeScroller.prototype.setDateRangeCustom=function(i,d){if(d===undefined){d=this._iCustomDuration}else if(d&&!isNaN(d)){d=parseInt(d,10)}if(sap.suite.ui.commons.util.DateUtils.isValidDate(i)&&sap.suite.ui.commons.DateRangeScroller.isValidDuration(d)){this._oDateRange.startDate.setTime(i.getTime());this._oDateRange.endDate.setTime(i.getTime());sap.suite.ui.commons.util.DateUtils.resetDateToStartOfDay(this._oDateRange.startDate);sap.suite.ui.commons.DateRangeScroller.adjustDateByStep(this._oDateRange.endDate,d-1);sap.suite.ui.commons.util.DateUtils.resetDateToEndOfDay(this._oDateRange.endDate);sap.suite.ui.commons.DateRangeScroller.updateDateRangeValue(C,this._oDateRange,this._oDateRangeLabel,this._oDateFormat);this._sRangeType=C;this._iCustomDuration=d}return this};sap.suite.ui.commons.DateRangeScroller.prototype.incrementDateRange=function(){switch(this._sRangeType){case(D):sap.suite.ui.commons.DateRangeScroller.adjustRangeByStep(this._oDateRange,1);sap.suite.ui.commons.DateRangeScroller.updateDateRangeValue(D,this._oDateRange,this._oDateRangeLabel,this._oDateFormat);break;case(W):sap.suite.ui.commons.DateRangeScroller.adjustRangeByStep(this._oDateRange,w);sap.suite.ui.commons.DateRangeScroller.updateDateRangeValue(W,this._oDateRange,this._oDateRangeLabel,this._oDateFormat);break;case(C):sap.suite.ui.commons.DateRangeScroller.adjustRangeByStep(this._oDateRange,this._iCustomDuration);sap.suite.ui.commons.DateRangeScroller.updateDateRangeValue(C,this._oDateRange,this._oDateRangeLabel,this._oDateFormat);break;case(M):var s=this._oDateRange.startDate.getMonth()+1;this._oDateRange.startDate.setMonth(s);this._oDateRange.endDate.setTime(this._oDateRange.startDate.getTime());sap.suite.ui.commons.util.DateUtils.resetDateToEndOfMonth(this._oDateRange.endDate);sap.suite.ui.commons.DateRangeScroller.updateDateRangeValue(M,this._oDateRange,this._oDateRangeLabel,this._oDateFormat);break;case(Y):s=this._oDateRange.startDate.getFullYear()+1;this._oDateRange.startDate.setFullYear(s);this._oDateRange.endDate.setTime(this._oDateRange.startDate.getTime());sap.suite.ui.commons.util.DateUtils.resetDateToEndOfYear(this._oDateRange.endDate);sap.suite.ui.commons.DateRangeScroller.updateDateRangeValue(Y,this._oDateRange,this._oDateRangeLabel,this._oDateFormat);break}var c=this.getDateRange();this.fireChange({dateRange:c});return this};sap.suite.ui.commons.DateRangeScroller.prototype.decrementDateRange=function(){switch(this._sRangeType){case(D):sap.suite.ui.commons.DateRangeScroller.adjustRangeByStep(this._oDateRange,-1);sap.suite.ui.commons.DateRangeScroller.updateDateRangeValue(D,this._oDateRange,this._oDateRangeLabel,this._oDateFormat);break;case(W):sap.suite.ui.commons.DateRangeScroller.adjustRangeByStep(this._oDateRange,-w);sap.suite.ui.commons.DateRangeScroller.updateDateRangeValue(W,this._oDateRange,this._oDateRangeLabel,this._oDateFormat);break;case(C):sap.suite.ui.commons.DateRangeScroller.adjustRangeByStep(this._oDateRange,-this._iCustomDuration);sap.suite.ui.commons.DateRangeScroller.updateDateRangeValue(C,this._oDateRange,this._oDateRangeLabel,this._oDateFormat);break;case(M):var s=this._oDateRange.startDate.getMonth()-1;this._oDateRange.startDate.setMonth(s);this._oDateRange.endDate.setTime(this._oDateRange.startDate.getTime());sap.suite.ui.commons.util.DateUtils.resetDateToEndOfMonth(this._oDateRange.endDate);sap.suite.ui.commons.DateRangeScroller.updateDateRangeValue(M,this._oDateRange,this._oDateRangeLabel,this._oDateFormat);break;case(Y):s=this._oDateRange.startDate.getFullYear()-1;this._oDateRange.startDate.setFullYear(s);this._oDateRange.endDate.setTime(this._oDateRange.startDate.getTime());sap.suite.ui.commons.util.DateUtils.resetDateToEndOfYear(this._oDateRange.endDate);sap.suite.ui.commons.DateRangeScroller.updateDateRangeValue(Y,this._oDateRange,this._oDateRangeLabel,this._oDateFormat);break}var c=this.getDateRange();this.fireChange({dateRange:c});return this};sap.suite.ui.commons.DateRangeScroller.prototype.getDateRange=function(){var c={startDate:new Date(this._oDateRange.startDate.getTime()),endDate:new Date(this._oDateRange.endDate.getTime())};return c};sap.suite.ui.commons.DateRangeScroller.prototype.setDateFormat=function(d){if(d&&d instanceof sap.ui.core.format.DateFormat){this._oDateFormat=d}else{this._oDateFormat=null}sap.suite.ui.commons.DateRangeScroller.updateDateRangeValue(this._sRangeType,this._oDateRange,this._oDateRangeLabel,this._oDateFormat)};sap.suite.ui.commons.DateRangeScroller.prototype.onclick=function(e){switch(e.target){case jQuery.sap.byId(this.getId()+'-decrementScrollButton')[0]:this.decrementDateRange();break;case jQuery.sap.byId(this.getId()+'-incrementScrollButton')[0]:this.incrementDateRange();break}jQuery.sap.byId(this.getId()+"-labelarea").focus()};sap.suite.ui.commons.DateRangeScroller.prototype.onsapright=function(e){this.incrementDateRange();e.preventDefault();e.stopPropagation()};sap.suite.ui.commons.DateRangeScroller.prototype.onsapleft=function(e){this.decrementDateRange();e.preventDefault();e.stopPropagation()};sap.suite.ui.commons.DateRangeScroller.prototype.onsapup=function(e){this.incrementDateRange();e.preventDefault();e.stopPropagation()};sap.suite.ui.commons.DateRangeScroller.prototype.onsapdown=function(e){this.decrementDateRange();e.preventDefault();e.stopPropagation()}}());
