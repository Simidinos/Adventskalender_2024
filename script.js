// Array of chapter file paths
const chapters = [
  "audio/chapter1.mp3",
  "audio/chapter2.mp3",
  "audio/chapter3.mp3",
  "audio/chapter4.mp3",
  "audio/chapter5.mp3",
  "audio/chapter6.mp3",
  "audio/chapter7.mp3",
  "audio/chapter8.mp3",
  "audio/chapter9.mp3",
  "audio/chapter10.mp3",
  "audio/chapter11.mp3",
  "audio/chapter12.mp3",
  "audio/chapter13.mp3",
  "audio/chapter14.mp3",
  "audio/chapter15.mp3",
  "audio/chapter16.mp3",
  "audio/chapter17.mp3",
  "audio/chapter18.mp3",
  "audio/chapter19.mp3",
  "audio/chapter20.mp3",
  "audio/chapter21.mp3",
  "audio/chapter22.mp3",
  "audio/chapter23.mp3",
  "audio/chapter24.mp3",
];

document.addEventListener("DOMContentLoaded", () => {
  const doors = document.querySelectorAll(".door");
  const currentDate = new Date();
  const adventStartDate = new Date(2024, 11, 1); // December 1, 2024
  const adventEndDate = new Date(2024, 11, 24); // December 24, 2024

  doors.forEach(door => {
    const doorDay = parseInt(door.textContent); // Extract the number from the door's content

    // Determine the status of the door
    if (currentDate >= adventStartDate && currentDate <= adventEndDate) {
      const currentAdventDay = Math.floor(
        (currentDate - adventStartDate) / (1000 * 60 * 60 * 24) + 1
      );

      if (doorDay <= currentAdventDay) {
        door.classList.add("past"); // Passed or current day
      } else {
        door.classList.add("future"); // Future day
        door.setAttribute("title", "Dont be too curious, come back on that day :) "); // Tooltip message
      }
    } else {
      // If outside Advent range, mark all as future
      door.classList.add("future");
      door.setAttribute("title", "Come back during Advent!");
    }
  });

  // Add click event listener after door statuses are set
  doors.forEach(door => {
    door.addEventListener("click", () => {
      if (door.classList.contains("past")) {
        // Play audio for "past" or "current" doors
        const chapterIndex = parseInt(door.getAttribute("data-chapter")) - 1;
        const audioSource = document.getElementById("audioSource");
        const audioPlayer = document.getElementById("audio");

        // Set and play the audio source
        audioSource.src = chapters[chapterIndex];
        audioPlayer.load(); // Reload to update source
        audioPlayer.play(); // Play the chapter
      } else {
        // Alert for future doors
        alert("Come back tomorrow to open this door!");
      }
    });
  });
});
