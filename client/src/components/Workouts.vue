<template>
  <li>
    {{ WorkoutTitle }}
    {{ WorkoutType }}
    {{ Time }}
    {{ Location }}
    {{ Duration }}
    {{ Picture }}
  </li>
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