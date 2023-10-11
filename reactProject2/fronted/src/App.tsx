import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { dataProjects } from './data';
import MyProject from './components/Project';
import ControlPointIcon from '@mui/icons-material/ControlPoint';

export type Project = {
  name: string;
  tasks: Task[];
};

export type Task = {
  name: string;
  dueDate: string;
  description: string[];
  status: 'Completed' | 'Pending' | 'In Progress' | 'Aborted';
};

const TabPanel = (props:any) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const MyTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event:any, newValue:any) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
      >
        {dataProjects.map((proj, index) => (
          <Tab key={index} label={proj.name}  />
          ))}
          
          <ControlPointIcon/>
      </Tabs>
      <>
        {dataProjects.map((proj, index) => (
          <TabPanel value={value} index={index} key={index}>
            <MyProject name={proj.name} tasks={proj.tasks} />
          </TabPanel>
        ))}
      </>
    </div>
  );
};

export default MyTabs;
