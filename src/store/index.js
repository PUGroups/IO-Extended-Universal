import { createStore } from 'vuex'
import axios  from 'axios'

export default createStore({
  state: {
    speakersWall: [],
    eventTimeline: [],
    newTImings:[
              "01:15pm - 01:45pm ",
              "01:15pm - 01:45pm ",
              "01:15pm - 01:45pm ",
              "01:15pm - 01:45pm ",
              " 02:00pm - 02:30pm",
              " 02:30pm - 03:15pm",
              " 03:30pm - 04:15pm",
              " 04:15pm - 05:00pm",
              " 05:15pm - 06:00pm",
              " 06:00pm -6:45pm",
            ]
  },
  mutations: {
    getSpeakersListMutation(state, payload) {
      // console.log(state,payload);
      // console.log("i recvd data in m,uattaion>", payload);
      state.speakersWall = payload;
    },
    getTimeSlotsWithDetailsMutation(state, payload) {
      state.eventTimeline = payload;
          // alert("call");
      // console.log(state.eventTimeline);
    },
  },
  actions: {
    getSpeakersListAction(context) {
      // console.log("in get speakers wall action");
      axios
        .get("https://sessionize.com/api/v2/7h33x0zi/view/SpeakerWall", {})
        .then(function(response) {
          // console.log("this is res>>>");
          // console.log(response.data);

          let speakersData = [];
          for (let data of response.data) {
            // console.log(data);
            speakersData.push(data);
          }
          context.commit("getSpeakersListMutation", speakersData);
          context.dispatch("getTimeSlotsWithDetailsAction");
          
          // console.log("this is final data >", speakersData);
        });
      //
    },
    getTimeSlotsWithDetailsAction(context) {
      // alert("time is called")
         
      axios
        .get("https://sessionize.com/api/v2/7h33x0zi/view/GridSmart", {})
        .then(function(response) {
          // console.log("this is res of time >>>");
          let slots = response.data[0].timeSlots;
          let eventTimeline = [];
         
          for (let slot of slots) {
            var i = 0;
            let speakersSlot = {
              // slotStart: NewslotTimings[i],
              eventId: slot.rooms[0].session.id,
              liveUrl: slot.rooms[0].session.liveUrl,
              recordingUrl: slot.rooms[0].session.recordingUrl,
              endsAt: slot.rooms[0].session.endsAt,
              description: slot.rooms[0].session.description,
              speakersId: slot.rooms[0].session.speakers[0].id,
              title: slot.rooms[0].session.title,
              speakersName: slot.rooms[0].session.speakers[0].name,
            };

            i++;
            let speakersWall = context.getters.getSpeakersWall;
            // console.log("speakersWasll>>" ,speakersWall);
            for (let speaker of speakersWall) {
              if (slot.rooms[0].session.speakers[0].id == speaker.id) {
                speakersSlot.profilePicture = speaker.profilePicture;
              }
            }

            // let NewslotTimings = [
            //   "01:15pm - 01:45pm ",
            //   "01:15pm - 01:45pm ",
            //   "01:15pm - 01:45pm ",
            //   "01:15pm - 01:45pm ",
            //   " 02:00pm - 02:30pm",
            //   " 02:30pm - 03:15pm",
            //   " 03:30pm - 04:15pm",
            //   " 04:15pm - 05:00pm",
            //   " 05:15pm - 06:00pm",
            //   " 06:00pm -6:45pm",
            // ];
            // for (let speaker of speakersWall) {
            //   let i;
            //   console.log("this is time", NewslotTimings[i], speaker);
            //   speakersSlot.slotStart = NewslotTimings[i];
            //   i++;
            // }

            // dateIST.setHours(dateIST.getHours() + 5);
            // dateIST.setMinutes(dateIST.getMinutes() + 30);

            // speakersSlot.slotStart.setHours( speakersSlot.slotStart.getHours() + 5);
            // speakersSlot.slotStart.setMinutes( speakersSlot.slotStart.getMinutes() + 30);
            eventTimeline.push(speakersSlot);
            // console.log(eventTimeline);
          }
          
          context.commit("getTimeSlotsWithDetailsMutation", eventTimeline);

          // for (let i of response.data.) {
          //   console.log(i.timeSlots);
          // }
          // context.commit("getSpeakersListMutation", speakersData);
        });
      //
    },
  },
  modules: {},
  getters: {
    getSpeakersWall(state) {
      return state.speakersWall;
    },
    getEventTimeline(state) {
      let i = 0;
      for (let event of state.eventTimeline) {
        
        event.slotStart= state.newTImings[i++];
      }
     
    
        return state.eventTimeline;
    },
  },
});
