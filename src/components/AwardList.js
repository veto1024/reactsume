import React, {Component} from "react";
import {Button} from "shards-react";
import {EducationListItem} from "./EducationListItem";
import {SkillItem} from "./SkillItem";
import {AwardItem} from "./AwardItem";

export class AwardList extends Component {


    render() {
        const {values, handleChange, addAward} = this.props;
        const awardItems = values.myAwards.map(item => (
            <div key={item.num.toString()}  className="col-xs-12">
                <AwardItem num={item.num} handleChange={handleChange} />
            </div>
        ));
        return (
            <div>
                {awardItems}
                <Button size="lg" type="button" className="" onClick={addAward}>New Award Entry</Button>
            </div>
        )
    }

}