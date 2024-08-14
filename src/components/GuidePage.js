import React from 'react';

function GuidePage() {
  return (
    <div className="guide">
      <h1>Welcome to the Brain Guide</h1>
      <p>Explore the wonders of the human brain and unlock its mysteries.</p>

      <section className="section">
        <h2>Brain Anatomy</h2>
        <img
          src="https://www.simplypsychology.org/wp-content/uploads/cerebral-hemispheres.jpg"
          alt="Brain Anatomy"
          style={{
            maxWidth: '60%', // Adjust the maximum width as needed
            height: 'auto',  // Automatically adjust the height while maintaining aspect ratio
            display: 'block', // Ensure it's treated as a block element
            margin: '0 auto' // Center the image within its container
          }}
        />

        <p>The brain is an intricate organ composed of billions of neurons. It can be divided into several main regions, each with its specialized functions. These include the cerebrum, cerebellum, brainstem, and diencephalon.</p>
        <p>The cerebrum, the largest part of the brain, is responsible for conscious thought, perception, and voluntary movements. It's divided into two hemispheres, each controlling the opposite side of the body.</p>
        <p>The cerebellum, located at the back of the brain, coordinates movement, balance, and posture. The brainstem regulates essential functions like breathing, heart rate, and digestion.</p>
      </section>

      <section className="section">
        <h2>Neurological Functions</h2>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWK_ljqRmmhLmdKRY50wHQzKHn5mNoGt2V2A&usqp=CAU"
          alt="Brain Anatomy"
          style={{
            maxWidth: '60%', // Adjust the maximum width as needed
            height: 'auto',  // Automatically adjust the height while maintaining aspect ratio
            display: 'block', // Ensure it's treated as a block element
            margin: '0 auto' // Center the image within its container
          }}
        />
        <p>The brain is the command center of the body. It controls everything from basic bodily functions like breathing and heartbeat to complex cognitive processes like problem-solving, decision-making, and emotions.</p>
        <p>Specialized areas of the brain handle specific functions. For instance, the frontal lobe is associated with executive functions, the parietal lobe with sensory processing, the temporal lobe with auditory perception, and the occipital lobe with visual processing.</p>
      </section>

      <section className="section">
        <h2>Brain Health</h2>
        <img
          src="https://neurologysleepcentre.com/blog/wp-content/uploads/2023/06/istockphoto-1358081661-612x612-1.jpg"
          alt="Brain Anatomy"
          style={{
            maxWidth: '60%', // Adjust the maximum width as needed
            height: 'auto',  // Automatically adjust the height while maintaining aspect ratio
            display: 'block', // Ensure it's treated as a block element
            margin: '0 auto' // Center the image within its container
          }}
        />
        <p>Maintaining a healthy brain is crucial for overall well-being. Engaging in activities that stimulate the mind, getting regular exercise, and adopting a balanced diet rich in nutrients are key components of brain health.</p>
        <p>Adequate sleep, stress management, and avoiding harmful substances also contribute to a healthy brain. Regular check-ups and early intervention for any neurological concerns are essential for long-term brain health.</p>
      </section>

      <section className="section">
        <h2>Neuroplasticity</h2>
        <img
          src="https://hinjawadi.rubyhall.com/wp-content/uploads/2023/04/Neuroplasticity.jpg"
          alt="Brain Anatomy"
          style={{
            maxWidth: '60%', // Adjust the maximum width as needed
            height: 'auto',  // Automatically adjust the height while maintaining aspect ratio
            display: 'block', // Ensure it's treated as a block element
            margin: '0 auto' // Center the image within its container
          }}
        />
        <p>Neuroplasticity is the brain's remarkable ability to adapt and reorganize itself. It allows for learning new skills, recovering from injuries, and adapting to changing environments. This process is essential for rehabilitation after brain injuries and strokes.</p>
        <p>Engaging in activities that challenge the brain, such as puzzles, learning new languages, or playing musical instruments, can enhance neuroplasticity and promote cognitive health.</p>
      </section>

      <section className="section">
        <h2>Cognitive Processes</h2>
        <img
          src="https://braincheck.com/wp-content/uploads/2018/02/Cognitive-processes.jpeg"
          alt="Brain Anatomy"
          style={{
            maxWidth: '60%', // Adjust the maximum width as needed
            height: 'auto',  // Automatically adjust the height while maintaining aspect ratio
            display: 'block', // Ensure it's treated as a block element
            margin: '0 auto' // Center the image within its container
          }}
        />
        <p>Cognitive processes encompass a wide range of mental activities, including memory, attention, perception, language, and problem-solving. These processes work together to shape our everyday experiences and interactions with the world.</p>
        <p>Understanding how these processes function can lead to improved learning strategies, better decision-making, and enhanced overall cognitive function.</p>
      </section>
    </div>
  );
}

export default GuidePage;
