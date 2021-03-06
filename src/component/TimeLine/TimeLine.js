import React from "react";
import "./TimeLine.css";
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";
import timelineElements from "./timelineElements";

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { alignPropType } from "react-bootstrap/esm/DropdownMenu";

function TimeLine() {
    let workIconStyles = { background: "rgba(66, 189, 222, 1)", alignPropType: "right" };
    let schoolIconStyles = { background: "rgba(66, 189, 222, 1)", alignPropType: "left" };

    return (
        <div className="timeLineWrap" id="timeline">
            <VerticalTimeline>
                {timelineElements.map((element) => {
                    let isWorkIcon = element.icon === "work";

                    return (
                        <VerticalTimelineElement
                            key={element.key}
                            contentStyle={{
                                background: "#16283F",
                                color: "#fff",
                            }}
                            contentArrowStyle={{
                                borderRight: "7px solid  #16283F",
                            }}
                            iconStyle={
                                isWorkIcon ? workIconStyles : schoolIconStyles
                            }
                            icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                        >
                            <h4 className="vertical-timeline-element-title">
                                {element.startDate}
                            </h4>
                            <h3 className="vertical-timeline-element-subtitle">
                                {element.title}
                            </h3>
                            <p id="description">{element.description}</p>
                        </VerticalTimelineElement>
                    );
                })}
            </VerticalTimeline>
        </div>
    );
}
export default TimeLine;
