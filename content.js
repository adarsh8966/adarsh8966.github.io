/*
 * PORTFOLIO CONTENT
 * Edit this one file to change your public portfolio.
 * To add a project, duplicate one of the objects in `projects` below.
 * All images are optional. Upload actual photos/videos to /media first.
 * Important: publish only claims you can demonstrate or substantiate.
 */
window.PORTFOLIO = {
  person: {
    name: "Adarsh Dodeja",
    firstName: "Adarsh",
    initials: "AD",
    title: "Robotics & Systems Engineer",
    location: "Buffalo, New York",
    email: "adarshdodeja15@gmail.com",
    github: "https://github.com/Adarsh8966",
    linkedin: "https://www.linkedin.com/in/adarsh-dodeja-3a73382a1/", 
    resume: "media/Adarsh_Dodeja_Resume.pdf",
    availability: "Interested in robotics, embedded systems & hardware engineering roles",
    intro: "I work where electronics, code, and physical systems meet. From sensor-level firmware to robot motion control, I like engineering that has to work beyond a simulation.",
    bio: "I hold degrees in Aerospace and Mechanical Engineering from the University at Buffalo. My projects span autonomous robots, embedded sensing, motion control, mechanical design, and applied machine learning. I enjoy moving between the workbench, the terminal, and the test plan.",
    currently: "Building a four-wheel mecanum robot and exploring higher-level reasoning for autonomous missions."
  },
  capabilities: [
    {
      number: "01",
      title: "Robotics & motion control",
      summary: "Mobile robotics, industrial 6-DoF pick-and-place integration, and closed-loop systems.",
      details: "I work across robot motion software and physical hardware: mecanum inverse kinematics, ROS 2 navigation, closed-loop servo control, CAN and SPI integration, and industrial pick-and-place programming. The 6-DoF arm work achieved 0.5 mm positional repeatability when returning to a taught position.",
      projectSlug: "six-axis-robot-arm",
      projectLabel: "6-DoF arm case study",
      skills: ["ROS 2", "6-DoF industrial automation", "Nonlinear MPC", "EKF / SLAM", "Inverse kinematics"]
    },
    {
      number: "02",
      title: "Embedded & electronics",
      summary: "Firmware, sensors, communications, and physical integration.",
      details: "On the baseball pitch tracker, I wrote the C++ firmware, worked with a six-axis IMU and BLE telemetry, designed a KiCad PCB, and assembled a working electronics prototype on perfboard. The published photos show the development/testing stage, not a fabricated production board.",
      projectSlug: "wearable-pitch-tracker",
      projectLabel: "Pitch tracker case study",
      skills: ["C++ / Python", "SPI / I²C / CAN", "BLE", "KiCad", "Sensor instrumentation"]
    },
    {
      number: "03",
      title: "Mechanical & aerospace",
      summary: "Modeling, prototyping, testing, and making engineering trade-offs.",
      details: "My work includes Fusion 360 chassis design for a custom laser-cut mecanum rover, structural modeling for a drone-mounted mechanism, and 3D-printed aircraft prototyping. The glider design placed first in its class competition with a 120-foot flight.",
      projectSlug: "printed-glider",
      projectLabel: "Winning glider project",
      skills: ["SolidWorks", "Fusion 360", "FEA / CAD", "3D printing", "MATLAB"]
    }
  ],
  experience: [
    {
      role: "Operations & Accounting Assistant",
      organization: "DS Traders",
      when: "2023–2026 · academic breaks",
      description: "Built Python-assisted verification workflows and supported inventory operations across ten retail locations during summer and winter breaks."
    },
    {
      role: "Robotics & Automation Intern",
      organization: "Biotech Manufacturing Plant",
      when: "2024–2025 · summer breaks · Mumbai, India",
      description: "Programmed and integrated an existing 6-DoF industrial robot arm for pick-and-place handling of manufacturing components using SPI, CAN, and a 100 Hz closed-loop control system."
    }
  ],
  projects: [
    {
      slug: "autonomous-mecanum-rover",
      title: "Autonomous Mecanum Rover",
      subtitle: "From motor commands to intelligent navigation.",
      category: "Robotics",
      secondary: "Controls",
      kind: "rover",
      year: "2026 — ongoing",
      status: "In progress",
      featured: true,
      accent: "mint",
      index: "01",
      cardDescription: "A self-directed robot project combining ROS 2, mecanum kinematics, closed-loop control, indoor mapping, and nonlinear trajectory planning.",
      overview: "A four-wheel mecanum platform for exploring what it takes to make a robot perceive its surroundings, estimate its motion, and execute a goal. The project connects low-level wheel commands to state estimation and higher-level planning.",
      challenge: "Mecanum motion adds lateral control, but coordinating four independent motors while handling odometry, sensor updates, and navigation requires careful software boundaries.",
      approach: "I structured the project around ROS 2 nodes for velocity commands, wheel control, state estimation, and navigation. The control work includes mecanum inverse kinematics, encoder feedback, a robot_localization EKF, SLAM Toolbox, and NMPC formulated using CasADi with IPOPT.",
      result: "In 20 return-to-start navigation trials, the rover recorded an average 8 cm positional displacement from its starting position, measured using a tape measure. Other reported evaluations include at least 90% obstacle-avoidance success across 50 runs. Hardware/software integration remains an ongoing project; the agentic layer is unfinished.",
      myRole: "Self-directed engineering project: architecture, controls software, sensor integration, electrical assembly, testing.",
      highlights: [
        "Implemented a 50 Hz wheel-velocity command path with timeout-based zero-command behavior.",
        "Developed nonlinear MPC using CasADi and IPOPT for heading and trajectory tracking with local obstacle avoidance.",
        "Worked with encoder/IMU state estimation and 2D LiDAR mapping using ROS 2 tooling.",
        "Designed a custom aluminum rover chassis in Fusion 360 for laser-cut fabrication, including motor and sensor mounting features; integrated four mecanum wheels, DC motors, and DRV8833 drivers.",
        "Measured an 8 cm mean return-to-start displacement over 20 navigation trials using a tape measure."
      ],
      stats: [
        { value: "4", label: "independent drive wheels" },
        { value: "50 Hz", label: "wheel-command output" },
        { value: "8 cm", label: "mean return-to-start error (20 trials)" }
      ],
      stack: ["ROS 2", "Python", "C++", "Raspberry Pi 5", "Mecanum kinematics", "DRV8833", "LiDAR", "EKF", "SLAM Toolbox", "CasADi", "IPOPT"],
      notes: "Development-stage photo shown; photographs of the final integrated rover are still being located. The 8 cm value is the user-confirmed mean of tape-measured start-to-stop displacements over 20 trials, replacing an older 18 cm entry. This is not a single best run, and it is not attributed specifically to NMPC. Original logs and full test protocol have not yet been added to the public case study. The rover remains an ongoing build.",
      architecture: {
        title: "From sensing to wheel motion",
        caption: "Architecture-level relationships for the rover. Live deployment and timing verification are still being documented.",
        nodes: [
          {label: "Sensing", detail: "LiDAR · IMU · encoders · camera"},
          {label: "State estimation", detail: "EKF / SLAM Toolbox"},
          {label: "Planning & control", detail: "NMPC · CasADi / IPOPT"},
          {label: "Actuation", detail: "4 mecanum wheels · DRV8833"}
        ]
      },
      evidence: [
        {figure: "50 Hz", label: "Published wheel-command rate", detail: "Controller command path; not the NMPC optimization rate."},
        {figure: "EKF + SLAM", label: "Localization and mapping stack", detail: "Wheel odometry and IMU are fused; 2D LiDAR supports mapping."},
        {figure: "8 cm", label: "Average return-to-start displacement", detail: "User-confirmed mean across 20 trials, measured start-to-stop with a tape measure; logs/plots not yet published."}
      ],
      repository: "", // Add a public repository URL when ready.
      mediaStage: "EARLY BUILD / TESTING",
      coverImage: "media/mecanum-rover-early-build.webp",
      coverPosition: "center 54%",
      gallery: [
        {
          src: "media/mecanum-rover-early-build.webp",
          alt: "Early mecanum rover mechanical assembly with four mecanum wheels, battery holder, blue chassis plate, and unconnected wiring",
          caption: "EARLY BUILD / DRIVETRAIN FIT-CHECK — Initial mecanum-wheel assembly and temporary wiring during development. I designed the custom rover chassis in Fusion 360 for laser-cut fabrication, including motor and sensor mounting interfaces. This is an early test assembly, not a photograph of the finished custom chassis."
        }
      ]
    },
    {
      slug: "wearable-pitch-tracker",
      title: "Wearable Pitch Tracker",
      subtitle: "Turning raw IMU motion into measurable pitching data.",
      category: "Embedded",
      secondary: "Product design",
      kind: "tracker",
      year: "2026",
      status: "Completed",
      featured: true,
      accent: "violet",
      index: "02",
      cardDescription: "Led a sensor-based baseball wearable project, writing the complete C++ firmware and building the working electronics prototype.",
      overview: "A compact wearable system that identifies baseball pitches using inertial sensing and wireless telemetry. Built as a University at Buffalo senior design project, it crossed embedded firmware, hardware prototyping, electronics design, and mechanical packaging.",
      challenge: "Distinguishing a pitch from everyday movement meant dealing with noisy IMU signals, event timing, microcontroller constraints, and repeatable testing.",
      approach: "As team lead, I wrote the full C++ firmware, including signal filtering, event logic, and state-machine processing. I designed a PCB in KiCad, assembled the functioning circuitry on perfboard, and contributed to the 3D-printed enclosure design and engineering documentation.",
      result: "Across 100 controlled experiments, the project recorded 99% pitch-detection accuracy and 95% velocity accuracy. We presented the working system at the senior design showcase, where it drew interest from the university baseball club.",
      myRole: "Team lead; sole C++ firmware author; PCB design; perfboard assembly; enclosure design support; testing.",
      highlights: [
        "Authored all embedded C++ firmware for an nRF52840-based platform using a BMI323 six-axis IMU.",
        "Designed the electronics in KiCad and hand-assembled the working prototype on perfboard.",
        "Implemented IMU event processing and Bluetooth Low Energy telemetry.",
        "Validated detection and velocity accuracy in 100 controlled experiments."
      ],
      stats: [
        { value: "99%", label: "pitch detection" },
        { value: "95%", label: "velocity accuracy" },
        { value: "100", label: "controlled experiments" }
      ],
      stack: ["Embedded C++", "nRF52840", "BMI323 IMU", "BLE", "KiCad", "SolidWorks", "3D printing", "Oscilloscope"],
      notes: "Photo shows electronics planning/testing, not the finished wearable. Finished-product photographs are not yet available. The KiCad PCB was designed, but the working physical prototype was assembled on perfboard. A mobile app and safety score were project goals, not confirmed delivered features.",
      architecture: {
        title: "A pitch, from wrist motion to data",
        caption: "System-level flow; this is not a circuit schematic or production PCB.",
        nodes: [
          {label: "Motion sensor", detail: "BMI323 six-axis IMU"},
          {label: "Signal processing", detail: "C++ filtering · event logic"},
          {label: "Microcontroller", detail: "nRF52840 · BLE"},
          {label: "Validation", detail: "100 controlled experiments"}
        ]
      },
      evidence: [
        {figure: "99%", label: "Pitch detection", detail: "Reported over 100 controlled experiments."},
        {figure: "95%", label: "Velocity accuracy", detail: "Reported over the same controlled experiments."},
        {figure: "Perfboard", label: "Built prototype", detail: "KiCad PCB designed but not fabricated."}
      ],
      repository: "",
      mediaStage: "ELECTRONICS PROTOTYPE / TESTING",
      coverImage: "media/pitch-tracker-electronics-prototype.webp",
      coverPosition: "center 62%",
      gallery: [
        {
          src: "media/pitch-tracker-electronics-prototype.webp",
          alt: "Early baseball pitch tracker electronics prototype on green perfboard with microcontroller, sensor breakout, and hand-wired connections",
          caption: "ELECTRONICS PLANNING / BRING-UP — Early perfboard hardware used to plan wiring and test components for the baseball pitch tracker. The KiCad PCB was designed separately; this photo is from development, not a finished wearable product."
        }
      ]
    },
    {
      slug: "six-axis-robot-arm",
      title: "6-DoF Industrial Robot Arm",
      subtitle: "Pick-and-place automation with real industrial hardware.",
      category: "Robotics",
      secondary: "Automation",
      kind: "arm",
      year: "2024 — 2025",
      status: "Completed",
      featured: true,
      accent: "sky",
      index: "03",
      cardDescription: "Programmed and integrated an existing 6-DoF industrial robot arm for pick-and-place handling of manufacturing components.",
      overview: "A motion-control and hardware-integration project using an existing physical six-degree-of-freedom robotic arm at a biotech manufacturing plant in Mumbai, India, during the 2024 and 2025 summer breaks.",
      challenge: "Automating pick-and-place movement on a real industrial arm required reliable hardware communication, repeatable servo behavior, and motion sequences that could return to the same taught position consistently.",
      approach: "I personally wired SPI connections, implemented CAN bus communication in control software, configured a 100 Hz closed-loop servo control loop, and taught/programmed physical pick-and-place motions. I also used inverse-kinematics-based motion programming to support repeatable component handling.",
      result: "The integrated system achieved 0.5 mm positional repeatability when the arm repeatedly returned to the same taught position during pick-and-place operation.",
      myRole: "Electrical wiring, CAN communications, control software, servo-loop configuration, and motion teaching/programming on an existing industrial robotic arm. The mechanical arm existed before my work.",
      highlights: [
        "Wired SPI hardware interfaces on an existing six-axis industrial robot.",
        "Implemented CAN communication and a 100 Hz closed-loop servo controller for pick-and-place motion.",
        "Programmed taught positions and inverse-kinematics-based motion sequences for manufacturing-component handling.",
        "Achieved 0.5 mm positional repeatability when returning to the same taught position."
      ],
      stats: [
        { value: "6", label: "degrees of freedom" },
        { value: "100 Hz", label: "closed-loop control" },
        { value: "0.5 mm", label: "positional repeatability" }
      ],
      stack: ["SPI", "CAN", "Servo control", "Inverse kinematics", "Pick-and-place automation", "Industrial robotics"],
      notes: "This work integrates and programs an existing industrial robot. It is not a claim of mechanical arm design or fabrication. The reported 0.5 mm figure refers to positional repeatability when repeatedly returning to the same taught position.",
      architecture: {
        title: "Industrial pick-and-place integration",
        caption: "Functional signal flow, not an electrical wiring diagram or verified vendor-specific controller topology.",
        nodes: [
          {label: "Programmed positions", detail: "Taught pick / place motions"},
          {label: "Motion control", detail: "Inverse kinematics · 100 Hz loop"},
          {label: "Communications", detail: "SPI wiring · CAN programming"},
          {label: "Physical arm", detail: "Existing 6-DoF robot"}
        ]
      },
      evidence: [
        {figure: "0.5 mm", label: "Positional repeatability", detail: "Repeatedly returning to one taught position; not absolute accuracy."},
        {figure: "100 Hz", label: "Closed-loop control", detail: "Reported control configuration; sustained timing logs not on file."},
        {figure: "2024–25", label: "Industrial setting", detail: "Biotech manufacturing facility, Mumbai; summer work."}
      ],
      repository: "",
      coverImage: "",
      gallery: []
    },
    {
      slug: "counter-drone-mechanism",
      title: "Counter-Drone Cutting Mechanism",
      subtitle: "Camera-assisted wire localization with path planning and FPV-guided flight.",
      category: "Hardware",
      secondary: "Aerospace",
      kind: "drone",
      year: "2025 — 2026",
      status: "Completed",
      featured: true,
      accent: "orange",
      index: "04",
      cardDescription: "A UAV-mounted cutting system that used camera-assisted wire localization, path planning, FPV/VR-guided flight, mechanical prototyping, actuator troubleshooting, and flight testing.",
      overview: "A drone-mounted mechanism designed to locate and cut fiber-optic tether wires. The system used a camera to determine the wire position, while flight and cutting were carried out using path planning and an FPV VR headset rather than full autonomy. The physical design also had to balance mechanism performance with mass, center of gravity, and actuator constraints.",
      challenge: "The project required finding a thin fiber wire in the camera view, planning the approach, and executing the cut while flying through an FPV VR headset. The actuator could initially rotate only about 180 degrees, although the mechanism required a full turn; added mass and mounting position also constrained the drone design.",
      approach: "The team used a camera to locate the fiber wire and path planning to guide the interception approach, while the cut itself was performed through FPV VR-guided flight rather than a fully autonomous system. I worked with Autodesk Inventor and Fusion 360, supported three prototype iterations, 3D printed mechanical components, and participated in flight tests. I also disassembled the servo, identified the gear limiting rotation, modified it, and verified the full rotation range.",
      result: "The camera-assisted, path-planned system was field-tested in more than 15 UAV flights, and the modified actuator reached the required rotation range. Cutting performance still depended on wire count and available torque.",
      myRole: "CAD/FEA, tolerance planning, prototype fabrication, mechanical assembly, servo teardown and troubleshooting, flight-test iteration.",
      highlights: [
        "Modeled housings and mounts using Autodesk Inventor and Fusion 360.",
        "Produced and assessed three physical prototype iterations.",
        "Diagnosed a servo's 180° rotation limitation and modified the mechanism to permit full rotation.",
        "Participated in 15+ UAV field tests with logged observations.",
        "Used camera-based wire localization, path planning, and FPV VR-guided flight to support fiber-optic tether cutting."
      ],
      stats: [
        { value: "3", label: "prototype iterations" },
        { value: "15+", label: "UAV field tests" },
        { value: "360°", label: "verified actuator range" }
      ],
      stack: ["Camera-based perception", "Path planning", "FPV VR headset", "Autodesk Inventor", "Fusion 360", "FEA", "3D printing", "Servo systems", "DFM", "Field testing"],
      notes: "The system used camera-based wire localization, path planning, and FPV VR-guided operation; it is not described here as fully autonomous. Specific computer-vision algorithms and detection precision are not documented here. The mechanism was designed for retrofit compatibility; validation across multiple UAV platforms has not been established.",
      architecture: {
        title: "Human-guided wire interception",
        caption: "Path planning and camera-assisted wire localization supported FPV-guided cutting. The process was not fully autonomous.",
        nodes: [
          {label: "Camera", detail: "Identify target wire position"},
          {label: "Path planning", detail: "Plan interception approach"},
          {label: "FPV VR operator", detail: "Guide the flight and cut"},
          {label: "Mechanism", detail: "Modified servo · blade assembly"}
        ]
      },
      evidence: [
        {figure: "15+", label: "UAV field tests", detail: "Real-world iterations and flight trials."},
        {figure: "3", label: "Prototype iterations", detail: "Physical design revisions."},
        {figure: "360°", label: "Actuator range", detail: "Range verified after servo mechanical modification."}
      ],
      repository: "",
      coverImage: "media/drone-flight-cover.webp",
      coverPosition: "center center",
      gallery: [
        { src: "media/drone-flight-cover.webp", alt: "Quadcopter in flight carrying the mounted cutting mechanism", caption: "Cropped field-test image showing the drone and mounted cutting mechanism more clearly." },
        { src: "media/drone-field-original.webp", alt: "Quadcopter in flight carrying the mounted cutting mechanism in the original scene", caption: "Original field-test photograph of the drone during testing." }
      ],
      video: "", // Example: "media/drone-test.mp4"
      videoPoster: "media/drone-flight-cover.webp"
    },
    {
      slug: "automated-uno-poker-card-distributor",
      title: "UNO / Poker Card Distributor",
      subtitle: "Servo-driven card dealing for multiplayer games.",
      category: "Hardware",
      secondary: "Embedded control",
      kind: "cards",
      year: "2025",
      status: "Completed",
      featured: false,
      accent: "sky",
      index: "05",
      cardDescription: "An Arduino Uno card-dealing project using C++ and servo control to direct cards around a 360° multiplayer layout.",
      overview: "An automated card-distribution project for UNO and poker-style multiplayer setups. The aim was to handle different player configurations using an Arduino Uno and servo-based positioning rather than manually aiming each deal.",
      challenge: "A shared dealing mechanism needs to address multiple player positions with consistent movement while accommodating different numbers of seats around the table.",
      approach: "I programmed an Arduino Uno in C++ with custom multi-configuration control logic and servo motor commands for rotational distribution across a full 360° range. The documented target was setups with four to six players.",
      result: "Completed the documented Arduino and servo-control project for four-to-six-player rotational card distribution. Photographs, a demonstration, and measured dealing performance can be included when those materials are available.",
      myRole: "Arduino Uno programming, C++ dealing logic, servo-motor control, and multi-player configuration logic.",
      highlights: [
        "Programmed Arduino Uno control logic in C++ for automated card distribution.",
        "Used servo motors to address player positions around a 360° layout.",
        "Supported selectable player configurations for four to six players.",
        "Connected embedded control decisions to a real electromechanical dealing problem."
      ],
      stats: [
        { value: "360°", label: "rotational coverage" },
        { value: "4–6", label: "player positions" },
        { value: "Arduino", label: "Uno control platform" }
      ],
      stack: ["Arduino Uno", "C++", "Servo motors", "Embedded control", "Mechatronics"],
      notes: "The documented work covers servo positioning and multi-player distribution. Specific UNO/poker rules, card-separation hardware, dealing accuracy, and build photos are not yet documented here.",
      repository: "",
      coverImage: "", // Example: "media/card-distributor-cover.webp"
      gallery: [] // Add original photos, CAD images, and demo screenshots below.
    },
    {
      slug: "biogenic-materials-study",
      title: "Biogenic Materials Study",
      subtitle: "A selection method built around real engineering trade-offs.",
      category: "Research",
      secondary: "Materials",
      kind: "fibers",
      year: "2026",
      status: "Completed",
      featured: false,
      accent: "mint",
      index: "06",
      cardDescription: "A weighted decision-matrix analysis of low-carbon insulation feedstocks, including sensitivity tests and a change of functional unit.",
      overview: "An independent engineering materials study at the University at Buffalo comparing biogenic feedstocks for insulation based on availability, price, and carbon storage.",
      challenge: "A material that wins on cost per kilogram may lose when evaluated by a comparable unit of thermal performance.",
      approach: "I constructed a fixed-threshold, five-point decision matrix using published evidence, tested alternate criterion weights, and compared materials on both mass and equivalent insulation function.",
      result: "Recovered cardboard ranked first under the original weighted criteria and stayed first through sensitivity checks. The functional-unit analysis showed how a different engineering objective changes the conclusion.",
      myRole: "Independent research, data synthesis, matrix design, sensitivity analysis, and technical reporting.",
      highlights: ["Evaluated regional supply, price, and gross biogenic carbon storage.", "Built absolute scoring thresholds to keep comparisons stable.", "Ran scenario-based sensitivity analyses.", "Compared rankings per mass and per equivalent thermal function."],
      stats: [{ value: "3", label: "decision criteria" }, { value: "5-point", label: "scoring framework" }, { value: "2", label: "sensitivity scenarios" }],
      stack: ["Materials research", "Decision matrices", "Sensitivity analysis", "Excel", "Technical writing"],
      notes: "Exact material scores are intentionally omitted because the original report contains inconsistent figures in separate sections.",
      repository: "", coverImage: "", gallery: []
    },
    {
      slug: "engineering-llm-finetuning",
      title: "Engineering LLM Fine-Tuning",
      subtitle: "Adapting language models to engineering tasks.",
      category: "Software",
      secondary: "AI / ML",
      kind: "ai",
      year: "2026 — ongoing",
      status: "In progress",
      featured: false,
      accent: "violet",
      index: "07",
      cardDescription: "Local model experimentation using QLoRA, curated engineering problems, reproducible containers, and baseline comparisons.",
      overview: "An experimental pipeline for adapting a DeepSeek-family model to structured engineering reasoning problems.",
      challenge: "Local GPU memory constraints and domain quality make model adaptation more about dataset and evaluation discipline than raw parameter count.",
      approach: "I curated engineering examples, configured QLoRA training, containerized the environment with Docker, and compared inference behavior with baselines through Ollama.",
      result: "A reproducible local experimentation workflow, with benchmark improvements still to be documented publicly.",
      myRole: "Dataset preparation, fine-tuning experiments, environment configuration, and evaluation design.",
      highlights: ["Set up QLoRA fine-tuning workflows on a local GPU.", "Curated engineering problem data from public datasets.", "Used Docker for experiment reproducibility.", "Compared generated solutions with baseline model behavior."],
      stats: [{ value: "QLoRA", label: "adaptation method" }, { value: "12 GB", label: "local GPU budget" }],
      stack: ["Python", "Hugging Face", "QLoRA", "Docker", "Ollama", "DeepSeek"],
      notes: "No benchmark improvement percentage is claimed without a published experimental protocol.",
      repository: "", coverImage: "", gallery: []
    },
    {
      slug: "stol-transport-design",
      title: "STOL Aircraft Design Study",
      subtitle: "Conceptual aircraft design through quantified trade studies.",
      category: "Aerospace",
      secondary: "Aircraft design",
      kind: "aircraft",
      year: "2025",
      status: "Completed",
      featured: false,
      accent: "sky",
      index: "08",
      cardDescription: "A conceptual military short-takeoff-and-landing transport study exploring sizing, payload, range, and wing design.",
      overview: "A conceptual aerospace engineering design study for a transport aircraft subject to demanding range and runway constraints.",
      challenge: "Payload, fuel, thrust-to-weight ratio, wing loading, and short-field performance pull the design in competing directions.",
      approach: "I used RDS-Win for initial sizing, the Breguet range relation for range estimates, and XFLR5/MATLAB for airfoil and configuration trade studies.",
      result: "Compared five or more configurations against a roughly 3,000-nautical-mile design range target and documented the design rationale.",
      myRole: "Conceptual sizing, analysis, configuration trade studies, and technical documentation.",
      highlights: ["Explored 5+ conceptual configurations.", "Evaluated thrust-to-weight and wing-loading constraints.", "Estimated fuel requirements using aircraft sizing methods.", "Compared wing/airfoil options for STOL performance."],
      stats: [{ value: "~3,000", label: "nm range target" }, { value: "5+", label: "configurations assessed" }],
      stack: ["RDS-Win", "XFLR5", "MATLAB", "Aircraft sizing", "Aerodynamic analysis"],
      notes: "A conceptual design study, not a built or flight-tested aircraft.",
      repository: "", coverImage: "", gallery: []
    },
    {
      slug: "ai-fitness-app",
      title: "AI Fitness Application",
      subtitle: "Turning tracking data into useful feedback.",
      category: "Software",
      secondary: "Full-stack",
      kind: "app",
      year: "2025 — 2026",
      status: "Completed",
      featured: false,
      accent: "orange",
      index: "09",
      cardDescription: "Mobile-first fitness tooling across food recognition, data synchronization, and personalized coaching workflows.",
      overview: "A product experiment exploring how vision, structured data, and language models can support day-to-day fitness tracking.",
      challenge: "Nutrition estimation is noisy, while meaningful coaching needs longitudinal behavior rather than isolated meal entries.",
      approach: "I built with React Native, Supabase, and Node.js, experimented with a food-image classification model, and integrated an LLM-based coaching workflow.",
      result: "Finished development of the fitness application and its food-recognition, data-sync, and AI coaching workflows. Public screenshots and validation results can be added when available.",
      myRole: "App architecture, data integration, model experimentation, and product implementation.",
      highlights: ["Designed cross-platform mobile interfaces with React Native.", "Integrated Supabase for backend and synchronization.", "Experimented with food-image recognition and AI coaching.", "Developed server-side application logic with Node.js."],
      stats: [{ value: "iOS / Android", label: "target platforms" }, { value: "Supabase", label: "backend stack" }],
      stack: ["React Native", "Expo", "Node.js", "Supabase", "Computer vision", "LLM APIs"],
      notes: "Development is complete. No app-store release, public user-adoption figures, or model-accuracy results are claimed.",
      repository: "", coverImage: "", gallery: []
    },
    {
      slug: "printed-glider",
      title: "3D-Printed Glider",
      subtitle: "Design. Print. Test. Iterate.",
      category: "Aerospace",
      secondary: "Prototyping",
      kind: "aircraft",
      year: "University competition",
      status: "Completed",
      featured: false,
      accent: "mint",
      index: "10",
      cardDescription: "A lightweight aircraft designed and 3D printed for maximum glide distance, taking 1st place in the class challenge.",
      overview: "An aerospace lab challenge focused on designing and 3D printing an aircraft that would travel as far as possible in an unpowered glide. The final design placed first in the class competition.",
      challenge: "The winning design needed a practical balance of aerodynamic efficiency, printed weight, structural stiffness, and repeatable release behavior.",
      approach: "I applied basic aerodynamic design principles, fabricated the aircraft using additive manufacturing, and tested its performance in the class competition.",
      result: "The aircraft flew 120 feet — the farthest recorded distance in the class — and finished in 1st place.",
      myRole: "Aircraft design, additive manufacturing, and flight testing.",
      highlights: ["Designed a printable airframe around glide-distance performance.", "Built the aircraft using FDM additive manufacturing.", "Tested real-world flight distance.", "Finished first in the class competition."],
      stats: [{ value: "1st", label: "class result" }, { value: "120 ft", label: "glide distance" }],
      stack: ["Aerodynamics", "3D printing", "Rapid prototyping", "Flight testing"],
      notes: "Class competition result, not an external aircraft performance certification.",
      repository: "",
      coverImage: "media/glider-cover.webp",
      coverPosition: "center 68%",
      video: "", // Example: "media/glider-flight.mp4"
      videoPoster: "media/glider-cover.webp",
      gallery: [
        { src: "media/glider-cover.webp", alt: "Actual 3D-printed glider on a wooden work surface", caption: "3D-printed competition glider; cropped to focus on the physical airframe." },
        { src: "media/glider-drawing-left.webp", alt: "Dimensioned technical drawing showing complete left-side glider planform views", caption: "Original engineering drawing, left-side views retained with the right-side details removed." },
        { src: "media/glider-field.webp", alt: "3D-printed glider resting on snowy field after test or competition flight", caption: "Outdoor glider photograph from the challenge setting." }
      ]
    }
  ]
};
