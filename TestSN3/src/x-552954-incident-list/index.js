import {createCustomElement, actionTypes} from '@servicenow/ui-core';
import { createHttpEffect } from '@servicenow/ui-effect-http';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import '@servicenow/now-template-card'
import styles from './styles.scss';
const {COMPONENT_BOOTSTRAPPED} = actionTypes;

const view = (state, {updateState}) => {
	const {incidentList} = state;
	const output = incidentList.map(item => 
			<now-template-card-assist 
			 style={{flex:'0 49%', marginTop:'16px'}}
			 tagline={{"icon":"tree-view-long-outline","label":"Incident"}}
			 actions={[{"id":"share","label":"Copy URL"},{"id":"close","label":"Mark Complete"}]} 
			 heading={{"label":item.short_description}}
			 content={[{"label":"Number","value":{"type":"string","value": item.number  }},{"label":"State","value":{"type":"string","value": item.state }},{"label":"Assignment Group","value":{"type":"string","value":item.assignment_group.display_value}},{"label":"Assigned To","value":{"type":"string","value": item.assigned_to.display_value}}]}
			 contentItemMinWidth="300"
			 footerContent={{"label":"Updated","value": item.sys_updated_on}} 
			 configAria={{}}>
			</now-template-card-assist>
	)
	console.log(incidentList)
	return (
		<div style={{display: "flex", flexWrap: "wrap", justifyContent:'space-around'}}>
			{output}
		</div>
	)
};

createCustomElement('x-552954-incident-list', {
	actionHandlers: {
		[COMPONENT_BOOTSTRAPPED]: (coeffects) => {
			const { dispatch } = coeffects;
		
			dispatch('FETCH_LATEST_INCIDENT', {
				sysparm_display_value: 'true'
			});
		},
		'FETCH_LATEST_INCIDENT': createHttpEffect('api/now/table/incident?sysparm_display_value=true', {
			method: 'GET',
			queryParams: ['sysparm_limit','sysparm_query'],
			successActionType: 'FETCH_LATEST_INCIDENT_SUCCESS'
		}),
		'FETCH_LATEST_INCIDENT_SUCCESS': (coeffects) => {
			const { action, updateState } = coeffects;
			const { result } = action.payload;
			const incidentList = result;
			console.log(incidentList)		
			updateState({incidentList});
		},
		
	},
	renderer: {type: snabbdom},
	view,
	styles
});
