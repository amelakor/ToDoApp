import React from "react";
import { notepad, activity, algoritam } from "../../images/images";
import "./aboutpages.css";

export default function About() {
  return (
    <React.Fragment>
      <div className="aboutpage">
        <h1>How to Organize Your Day</h1>
        <p>
          If you’re always rushing around trying to get things done, it might be
          time for you to better organize your day. Organizing is a fairly
          personal activity, but it does involve some basics. You’ll want to
          determine the activities you need to accomplish, create an effective
          schedule, and work to stay organized. With a bit of effort and time,
          your routine will become habit and you’ll make your days more
          efficient and successful.
        </p>

        <div class="row">
          <div class="col-xl-7 col-md-6">
            <h2>Determining Your Activities</h2>
            <h3>Write down what you do</h3>
            <p>
              Grab a notebook and a pen that you will carry with you for a few
              days. Write down any activities you engage in, including work,
              errands, taking care of yourself, and having fun. Include how
              often you usually do these actions (daily, weekly, monthly).[1]
              This may include things like:
            </p>
            <ul>
              <li>Commuting.</li>
              <li>Working</li>
              <li>Sleeping</li>
              <li>Cleaning your house.</li>
            </ul>
          </div>

          <div class="col-xl-5 col-md-6">
            <img src={notepad} alt="notepads" />
          </div>
        </div>

        <div class="row">
          <div class="col-xl-5 col-md-6">
            <img src={activity} alt="activity" />
          </div>

          <div class="col-xl-7 col-md-6">
            <h3>Include any aspirations</h3>
            <p>
              If there are other things that you’d like to do, but never seem to
              get around to, include these on your list. As you organize your
              day, you will figure out how to include these new activities into
              your routine.[2] These might be things like:
            </p>
            <ul>
              <li>Working out</li>
              <li>Prepping healthy meals</li>
              <li>Playing guitar</li>
              <li>Hanging out with friends</li>
            </ul>
          </div>
        </div>

        <div class="row">
          <div class="col-xl-7 col-md-6">
            <h2>Cut unnecessary activities</h2>
            <p>
              ere is only so much time in every day. This means you must pick
              and choose which activities are most useful to you. This life
              change is two-fold: it will involve breaking some time-wasting
              habits, and learning to say "no."
            </p>
            <ul>
              <li>
                Common time-wasting habits include social media, checking email
                too often, watching television, and gossiping. When you engage
                in these types of activities, consider setting a timer for
                yourself. When the time is up, you must get back to work..
              </li>
              <li>
                If your boss, friends, spouse, and family are all asking things
                of you, it can be hard to keep up! Whenever you are asked to
                complete a project or do a favor, stop to consider whether or
                not you truly have the time to do the task well. Sometimes, you
                will need to say, "I just don't have time for that today."
              </li>
            </ul>
          </div>

          <div class="col-xl-5 col-md-6">
            <img src={algoritam} alt="algoritam" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

