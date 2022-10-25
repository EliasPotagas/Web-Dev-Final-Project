<template>
  <!--TODO STYLE THIS EVENTUALLY-->
  <div>
    <li>
    {{ WorkoutTitle }}
    {{ WorkoutType }}
    {{ Time }}
    {{ Area }}
    {{ Duration }}
    {{ Picture }}
  </li>
  </div>

</template>

<script>
export default {
  props: {
    WorkoutTitle: "",
    Duration: "",
    Location: "",
    Time: "",
    WorkoutType: "",
    Picture: "",
  },
  data() {
    return {
      isEditing: false,
      newWorkoutTitle: "",
      newTime: "",
      newDuration: "",
      newLocation: "",
      newPicture: "",
      newWorkoutType: "",
    };
  },
};
</script>