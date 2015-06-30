ApsContent = function () {
	var that = this; 
	
	that.componentData = {

"specComp" : 
{
  "databound": false,
  "extension": "Component",
  "group": "ScnCommunityBasics",
  "handlerType": "sapui5",
  "height": "600",
  "id": "Accordion",
  "package": "basics",
  "parentControl": "sap.ui.commons.layout.AbsoluteLayout",
  "require": [{
    "id": "common_basics",
    "space": "known"
  }],
  "title": "Accordion 2.0",
  "tooltip": "Accordion - Dynamic List of Entries",
  "width": "260"
},

"spec" : 
{
  "cleanAll": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Internal",
      "desc": "Clean All Nodes",
      "noAps": true,
      "noZtl": false,
      "refDesc": "Elements",
      "refProperty": "elementsContent",
      "refValue": "[]",
      "tooltip": "Clean All Nodes",
      "ztlFunction": "-clean",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": false,
    "visible": false
  },
  "defaultImage": {
    "opts": {
      "apsControl": "text",
      "cat": "Display-Image",
      "desc": "Default Image",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Default Image",
      "ztlFunction": "",
      "ztlType": "String"
    },
    "type": "Url",
    "value": "",
    "visible": true
  },
  "elementsContent": {
    "opts": {
      "apsControl": "array",
      "arrayDefinition": {"section": {
        "element": {
          "key": {
            "desc": "Unique Key",
            "type": "String"
          },
          "parentKey": {
            "desc": "Parent Key",
            "mode": "ztl",
            "type": "String"
          },
          "sequence": "parentKey,key,text,url",
          "text": {
            "desc": "Given Text",
            "type": "String"
          },
          "type": "Array",
          "url": {
            "desc": "Given Url",
            "type": "Url"
          }
        },
        "key": {
          "desc": "Unique Key",
          "type": "String"
        },
        "sequence": "key,text,url,element",
        "text": {
          "desc": "Given Text",
          "type": "String"
        },
        "type": "Array",
        "url": {
          "desc": "Given Url",
          "type": "Url"
        }
      }},
      "arrayMode": "TwoLevelArray",
      "cat": "Content",
      "desc": "Elements",
      "tooltip": "List of Elements",
      "ztlFunction": "",
      "ztlType": "DoubleArray"
    },
    "type": "String",
    "value": "[]",
    "visible": true
  },
  "expandedKey": {
    "opts": {
      "apsControl": "text",
      "cat": "Internal",
      "desc": "Expaned Key",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Expaned Key",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "type": "String",
    "value": "",
    "visible": false
  },
  "imageSize": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display-Image",
      "choiceType": "ImageSize",
      "desc": "Size of the Image",
      "options": [
        {
          "key": "Size_16px",
          "text": "16x16 pixels"
        },
        {
          "key": "Size_32px",
          "text": "32x32 pixels"
        }
      ],
      "tooltip": "Size of the Image",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "type": "String",
    "value": "Size_16px",
    "visible": true
  },
  "maxSectionHeight": {
    "opts": {
      "apsControl": "spinner",
      "cat": "Display-Section",
      "desc": "Max Height for Section",
      "tooltip": "Max Height for Section",
      "ztlFunction": "",
      "ztlType": "int"
    },
    "type": "int",
    "value": "200",
    "visible": true
  },
  "memberDisplay": {
    "opts": {
      "apsControl": "combobox",
      "cat": "Display-Members",
      "choiceType": "MemberDisplay",
      "desc": "Member Display",
      "options": [
        {
          "key": "Text",
          "text": "Text Only"
        },
        {
          "key": "Text_Key",
          "text": "Text (Key)"
        }
      ],
      "tooltip": "Member Display",
      "ztlFunction": "",
      "ztlType": "Choice"
    },
    "type": "String",
    "value": "text",
    "visible": true
  },
  "onFirstExpand": {
    "opts": {
      "cat": "Events",
      "desc": "On First Expand",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event for On First Expand"
    },
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "onSelectionChanged": {
    "opts": {
      "cat": "Events",
      "desc": "On Selection Changed",
      "noAps": true,
      "noZtl": true,
      "tooltip": "Event triggered on Selection Changed"
    },
    "type": "ScriptText",
    "value": "",
    "visible": true
  },
  "selectedKey": {
    "opts": {
      "apsControl": "text",
      "cat": "Internal",
      "desc": "Selected Key",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Selected Key",
      "ztlFunction": "-get",
      "ztlType": "String"
    },
    "type": "String",
    "value": "",
    "visible": false
  },
  "supportedContentNotation": {
    "opts": {
      "apsControl": "text",
      "cat": "Internal",
      "desc": "Supported Content Notation",
      "noAps": true,
      "noZtl": false,
      "tooltip": "Supported Content Notation",
      "ztlFunction": "-get",
      "ztlType": "shared.ContentNotation"
    },
    "type": "String",
    "value": "PARENT_CHILD_TEXT_URL",
    "visible": false
  },
  "withImage": {
    "opts": {
      "apsControl": "checkbox",
      "cat": "Display-Image",
      "desc": "Use Images",
      "tooltip": "Use Images",
      "ztlFunction": "",
      "ztlType": "boolean"
    },
    "type": "boolean",
    "value": true,
    "visible": true
  }
}, 

"specAbout" : 
{
  "description": "Accordion - Dynamic List of Entries",
  "icon": "Accordion.png",
  "title": "Accordion 2.0",
  "topics": [
    {
      "content": "Displays collapsible content panels for presenting information in a limited amount of space.",
      "title": "Accordion"
    },
    {
      "content": "This component is a visualization component. It requires specific space in the application canvas.",
      "title": "Visualization"
    }
  ]
}

};

	org_scn_community_component_Core(that, that.componentData);
    
	return that;
};