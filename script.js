// Array of chapter file paths
const chapters = [
  "audio/chapter1.mp3",
  "audio/chapter2.mp3",
  "audio/chapter3.mp3",
  "audio/chapter4.mp3",
  "audio/chapter5.mp3",
  // Continue for all 24 chapters
];

document.querySelectorAll(".door").forEach(door => {
  door.addEventListener("click", () => {
    const chapterIndex = door.getAttribute("data-chapter") - 1;
    const audioSource = document.getElementById("audioSource");
    const audioPlayer = document.getElementById("audio");
    
    // Set the source of the audio player to the selected chapter
    audioSource.src = chapters[chapterIndex];
    audioPlayer.load(); // reload to update source
    audioPlayer.play(); // play the chapter
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const doors = document.querySelectorAll(".door");
  const currentDate = new Date();
  const currentDay = currentDate.getDate(); // Get the current day (1-31)

  doors.forEach(door => {
    const doorDay = parseInt(door.textContent); // Extract the number from the door's content

    if (doorDay <= currentDay) {
      door.classList.add("past"); // Passed or current day
    } else {
      door.classList.add("future"); // Future day
    }
  });
});
