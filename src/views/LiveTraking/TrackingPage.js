
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { AutoSizer } from 'react-virtualized';
import DocumentTable from './tabs/DocumentTable';
import Tracking from './Tracking/Tracking'
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import {Label, Input, FormText } from 'reactstrap';
const useStyles = makeStyles({
	Rootcard: {
	  minWidth: 275,
	  margin:10,
	},

	title: {
	  fontSize: 14,
	},
	pos: {
	  marginBottom: 12,
	},
  });
 


function TrackingPage() {
	const classes = useStyles();
	const bull = <span className={classes.bullet}>•</span>;
	const [selectedTab, setSelectedTab] = useState(0);

	function handleTabChange(event, value) {
		setSelectedTab(value);
	}

	return (

		<div className="row w-98" style={{margin:'1%'}}>
			<div className="col-lg-12">
				<Card className={classes.Rootcard}>
					<CardContent>
					<Typography className="h2 pt-12" color="textPrimary">Document Tracking</Typography>
					</CardContent>
				</Card>
			</div>
			<div className="col-lg-12">
				<div className="row w-98 pl-24">
					<div className="col-lg-1 flex items-center">
						<Label for="exampleEmail" className="text-14 pt-8 font-500">Email</Label>
					</div>
					<div className="col-lg-5 pt-8">
						<Input 
						type="email"
						name="email"
						id="exampleEmail" />
					</div>
					<div className="col-lg-6 d-flex justify-content-end text-18 pt-12">
					<p className="font-500"> Expected Arrival</p>
					<p className="font-500 ml-16 underline"> 01/10/2021</p>
					</div>
				</div>
			</div>
			<div className="col-lg-12">
				<div className={classes.Rootcard}>
				<Tracking/>
				</div>
			</div>
			<div className="col-lg-8">
			</div>
			<div className="col-lg-4 my-16 flex justify-center" style={{paddingLeft:'15%'}}>
				<Button style={{ width: '50%', }} variant="contained" color="primary">
       			 Cancel
     			</Button>
			</div>


	</div>
	);
}

export default TrackingPage;
