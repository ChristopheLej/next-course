import { useEffect, useState } from 'react';
import { useCourses } from '../../hooks/courses';
import CardCourse from '../../components/card-course';
import style from '../../styles/courses.module.scss';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '@material-ui/lab/TabPanel';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  tab: {
    textTransform: 'none',
    minWidth: 'auto'
  },
  tabPanel: {
    padding: '0'
  }
}));

export default function Courses() {
  const levels = ['Beginner', 'Intermediate', 'Advanced'];
  const { courses, fetchCourses } = useCourses([]);
  const [value, setValue] = useState(0);
  const classes = useStyles();

  useEffect(() => {
    fetchCourses();
    console.log('useEffect');
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={style.container} role="tabpanel">
      <h2>All courses</h2>
      <TabContext value={value}>
        <Tabs
          onChange={handleChange}
          variant="fullWidth"
          value={value}
          indicatorColor="primary"
          textColor="primary">
          {levels.map((value, index) => (
            <Tab label={value} value={index} className={classes.tab}></Tab>
          ))}
        </Tabs>

        {levels.map((value, index) => (
          <TabPanel value={index} className={classes.tabPanel}>
            {courses
              .filter(c => c.category === value.toUpperCase())
              .map(course => (
                <CardCourse
                  key={course.id}
                  course={course}
                  viewDetail={id => console.log(id)}></CardCourse>
              ))}
          </TabPanel>
        ))}
      </TabContext>
    </div>
  );
}

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}>
//       {value === index && children}
//     </div>
//   );
// }
