import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import '@servicenow/now-template-card';
import styles from './styles.scss';

const view = (state, {updateState}) => {
	return (
		<div style={{display: "flex", flexWrap: "wrap", justifyContent:'space-around'}}>

			<now-template-card-assist 
			 style={{flex:'0 49%'}}
			 tagline={{"icon":"tree-view-long-outline","label":"Incident"}}
			 actions={[{"id":"share","label":"Copy URL"},{"id":"close","label":"Mark Complete"}]} 
			 heading={{"label":"my PDF docs are all locked from editing"}}
			 content={[{"label":"Number","value":{"type":"string","value":"INC0000038"}},{"label":"State","value":{"type":"string","value":"Closed"}},{"label":"Assignment Group","value":{"type":"string","value":"Service Desk"}},{"label":"Assigned To","value":{"type":"string","value":"Luke Wilson"}}]}
			 contentItemMinWidth="300"
			 footerContent={{"label":"Updated","value":"2020-05-08 17:36:44"}} 
			 configAria={{}}>
			</now-template-card-assist>
			<now-template-card-assist 
			 style={{flex:'0 49%'}}
			 tagline={{"icon":"tree-view-long-outline","label":"Incident"}}
			 actions={[{"id":"share","label":"Copy URL"},{"id":"close","label":"Mark Complete"}]} 
			 heading={{"label":"Hangs when trying to print VISIO document"}}
			 content={[{"label":"Number","value":{"type":"string","value":"INC0000006"}},{"label":"State","value":{"type":"string","value":"Closed"}},{"label":"Assignment Group","value":{"type":"string","value":"Software"}},{"label":"Assigned To","value":{"type":"string","value":"Howard Johnson"}}]}
			 contentItemMinWidth="300"
			 footerContent={{"label":"Updated","value":"2020-05-01 16:08:05"}} 
			 configAria={{}}>
			</now-template-card-assist>
			<now-template-card-assist 
			 style={{flex:'0 49%', marginTop:'16px'}}
			 tagline={{"icon":"tree-view-long-outline","label":"Incident"}}
			 actions={[{"id":"share","label":"Copy URL"},{"id":"close","label":"Mark Complete"}]} 
			 heading={{"label":"Printer in my office is out of toner"}}
			 content={[{"label":"Number","value":{"type":"string","value":"INC0000008"}},{"label":"State","value":{"type":"string","value":"Closed"}},{"label":"Assignment Group","value":{"type":"string","value":"Hardware"}},{"label":"Assigned To","value":{"type":"string","value":"ITIL User"}}]}
			 contentItemMinWidth="300"
			 footerContent={{"label":"Updated","value":"2020-05-09 16:08:39"}} 
			 configAria={{}}>
			</now-template-card-assist>
			<now-template-card-assist 
			 style={{flex:'0 49%', marginTop:'16px'}}
			 tagline={{"icon":"tree-view-long-outline","label":"Incident"}}
			 actions={[{"id":"share","label":"Copy URL"},{"id":"close","label":"Mark Complete"}]} 
			 heading={{"label":"Can't read email"}}
			 content={[{"label":"Number","value":{"type":"string","value":"INC0000001"}},{"label":"State","value":{"type":"string","value":"Closed"}},{"label":"Assignment Group","value":{"type":"string","value":"Service Desk"}},{"label":"Assigned To","value":{"type":"string","value":"Charlie Whitherson"}}]}
			 contentItemMinWidth="300"
			 footerContent={{"label":"Updated","value":"2020-05-01 16:20:00"}} 
			 configAria={{}}>
			</now-template-card-assist>
   </div>
	);
};

createCustomElement('x-552954-card-list', {
	renderer: {type: snabbdom},
	view,
	styles
});
