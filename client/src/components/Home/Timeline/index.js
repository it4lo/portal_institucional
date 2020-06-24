import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import AccountCircle from '@material-ui/icons/AccountCircle';
import CardTimeLine from './Card';


export default function TimeLine() {


  return (
    <VerticalTimeline layout="1-columns">
      <VerticalTimelineElement 
        style={{ padding: '0px' }}
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#fff', color: '#fff', padding: 0 }}
        date="2011 - present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<AccountCircle />}
      >
        <CardTimeLine />

      </VerticalTimelineElement>

      <VerticalTimelineElement
      visibilitySensorProps= {{ partialVisibility: true, offset: { bottom: 50 } }}
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        icon={<AccountCircle />}
      />
    </VerticalTimeline>

  );
}