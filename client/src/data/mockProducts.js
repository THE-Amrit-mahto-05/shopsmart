const rawCameraDrones = `
1 DJI Mavic 3 Pro (Best) 15 km 75 km/h 43 mins
2 DJI Air 3S 20 km 75 km/h 45 mins
3 DJI Mavic 3 Classic 15 km 75 km/h 46 mins
4 Autel EVO II Pro V3 15 km 72 km/h 40 mins
5 Parrot Anafi AI 23 km 55 km/h 32 mins
6 DJI Air 3 20 km 75 km/h 46 mins
7 DJI Inspire 3 15 km 94 km/h 28 mins
8 Autel Dragonfish Pro 30 km 108 km/h 158 mins
9 DJI Mini 4 Pro 20 km 57 km/h 34 mins
10 Skydio 2+ 6 km 58 km/h 27 mins
11 Autel EVO Lite+ 12 km 64 km/h 40 mins
12 DJI Air 2S 12 km 68 km/h 31 mins
13 PowerVision PowerEgg X 6 km 64 km/h 30 mins
14 Sony Airpeak S1 2.5 km 90 km/h 22 mins
15 Hubsan Zino Mini Pro 10 km 50 km/h 40 mins
16 FIMI X8 SE 2022 10 km 65 km/h 35 mins
17 Potensic Atom 6 km 57 km/h 31 mins
18 DJI Mini 3 Pro 12 km 57 km/h 34 mins
19 Autel EVO Nano+ 10 km 54 km/h 28 mins
20 Mavic 2 Zoom 8 km 72 km/h 31 mins
21 DJI Mini 2 SE 10 km 57 km/h 31 mins
`;

const rawRacingDrones = `
1 iFlight Nazgul Evoque F7 (Best) 8 km 150+ km/h 8 mins
2 GEPRC Mark5 HD 7 km 155 km/h 7 mins
3 Emax Hawk Apex 5 km 145 km/h 6 mins
4 Diatone Roma F5 V2 6 km 140 km/h 8 mins
5 Lumenier QAV-S JohnnyFPV 7 km 160 km/h 5 mins
6 iFlight Mach R5 5 km 170 km/h 4 mins
7 GEPRC Cinelog 35 V2 4 km 110 km/h 9 mins
8 Rotor Riot Bubby FPV 6 km 150 km/h 6 mins
9 Walksnail Avatar Racer 4 km 140 km/h 7 mins
10 Team BlackSheep Source One 10 km 145 km/h 10 mins
11 Happymodel Crux35 3 km 100 km/h 9 mins
12 Flywoo Explorer LR4 15 km 95 km/h 25 mins
13 BetaFPV Pavo30 3 km 105 km/h 7 mins
14 DarwinFPV Baby Ape 2 km 80 km/h 6 mins
15 iFlight Protek35 4 km 120 km/h 8 mins
16 GEPRC Rocket Plus 3 km 115 km/h 6 mins
17 Emax Tinyhawk III Plus 1 km 50 km/h 5 mins
18 BetaFPV Meteor85 1.5 km 70 km/h 6 mins
19 iFlight Titan DC5 7 km 145 km/h 8 mins
20 Diatone Taycan C3.1 3 km 95 km/h 7 mins
21 HGLRC Sector 5 V3 6 km 150 km/h 7 mins
`;

const rawFPVDrones = `
1 DJI Avata 360 (Best) 20 km 65 km/h 23 mins
2 DJI Avata 2 13 km 97 km/h 23 mins
3 Insta360 Antigravity A1 4 km 58 km/h 35 mins
4 DJI FPV Drone 10 km 140 km/h 20 mins
5 GEPRC Tern-LR40 12 km 90 km/h 20 mins
6 iFlight Chimera7 Pro 15 km 130 km/h 25 mins
7 BetaFPV Cetus X 1 km 45 km/h 5 mins
8 Flywoo Naked O3 6 km 100 km/h 8 mins
9 Lumenier Cine-Bird 5 km 90 km/h 7 mins
10 Rotor Riot Cinebot30 4 km 110 km/h 8 mins
11 iFlight Bob57 8 km 145 km/h 9 mins
12 Happymodel Mobula8 1 km 60 km/h 5 mins
13 GEPRC CineLog 25 3 km 85 km/h 6 mins
14 Emax Cinehawk 5 km 120 km/h 7 mins
15 Walksnail Moonlight 6 km 110 km/h 8 mins
16 iFlight Nazgul5 7 km 150 km/h 7 mins
17 BetaFPV Pavo25 2 km 95 km/h 6 mins
18 Flywoo Venom 4 km 140 km/h 5 mins
19 DarwinFPV CineApe 25 2 km 80 km/h 7 mins
20 HGLRC Veyron 35 4 km 100 km/h 8 mins
21 GEPRC Crocodile7 15 km 135 km/h 28 mins
`;

const rawBeginnerDrones = `
1 DJI Flip (Best) 10 km 57 km/h 31 mins
2 DJI Neo 2 8 km 50 km/h 25 mins
3 Potensic Atom SE 4 km 50 km/h 31 mins
4 Holy Stone HS720E 1 km 48 km/h 23 mins
5 DJI Mini 4K 10 km 57 km/h 31 mins
6 IronQuad Bumble Bee 0.5 km 30 km/h 10 mins
7 Traxxas LaTrax Alias 0.2 km 35 km/h 12 mins
8 Ryze Tello 0.1 km 28 km/h 13 mins
9 Syma X5C 0.1 km 25 km/h 8 mins
10 Hubsan X4 0.1 km 32 km/h 9 mins
11 BetaFPV Cetus Lite 0.1 km 20 km/h 5 mins
12 Potensic T25 0.3 km 40 km/h 10 mins
13 Holy Stone HS110D 0.15 km 30 km/h 10 mins
14 Snaptain S5C 0.08 km 25 km/h 9 mins
15 Cheerwing Syma X5SW 0.05 km 25 km/h 7 mins
16 DJI Spark 2 km 50 km/h 16 mins
17 Eachine E58 0.1 km 30 km/h 9 mins
18 Drocon Ninja 0.1 km 30 km/h 8 mins
19 Force1 F100 0.5 km 45 km/h 15 mins
20 Altair AA108 0.1 km 35 km/h 10 mins
21 MJX Bugs 3 0.5 km 80 km/h 18 mins
`;

const rawBeginnerKits = `
1 Makeblock mBot (Best) Intro to Logic $90 Scratch/Arduino
2 Wizbot Maxx Screen-free coding $120 Tangible/Grid
3 LEGO Boost 5-in-1 Creative $160 Block-based
4 Sphero Mini Portability & Fun $50 JavaScript/Block
5 Elegoo Smart Car V3 Circuit basics $50 Arduino IDE
6 Nintendo Labo Cardboard Gaming $70 Toy-Con Garage
7 Quarky Innovator 2-Wheel Basics $85 Python/Block
8 4M Solar Robot Renewable Energy $20 No Code
9 Thames & Kosmos Science Mechanical builds $45 No Code
10 Sillbird 12-in-1 Solar Solar Physics $35 No Code
11 UBTECH Jimu Buzzbot Animatronics $100 Block-based
12 Makeblock mBot Neo Wi-Fi Integration $110 Scratch/Python
13 4M Tin Can Robot Budget Mechanics $15 No Code
14 Tweak Junior Simple Motion $60 Block-based
15 MEX Robotics Starter Metal Frame Intro $40 Manual/RC
16 Avishkaar Tweak Lite Modular Play $55 Block-based
17 Snaptain S5C Simple Drone Intro $60 App Control
18 Elegoo Penguin Bot Bipedal Balance $40 Arduino
19 SunFounder PiCar-S Raspberry Pi Intro $100 Python
20 Freenove Quadruped 4-Legged Motion $75 Arduino
21 Yahboom Micro:bit V2 Tiny Computing $65 MakeCode
`;

const rawAdvancedKits = `
1 Arctos 6-Axis Arm (Best) Industrial Logic 600mm / 2kg ROS2 / C++
2 Standard Bots Core Pro Cobot 1.3m / 18kg Python/SDK
3 Annin AR4 MK3 6-Axis Precision 500mm / 1.9kg C++ / ROS
4 HiWonder JetArm AI Vision + ROS 400mm / 500g Python/OpenCV
5 MyCobot Pro 630 Collaborative AI 630mm / 2kg Python/ROS
6 Yahboom DOFBOT 6-DOF Learning 350mm / 250g Python/ROS
7 Arduino Braccio Servo Shielding 300mm / 150g Arduino IDE
8 Mirobot 6-Axis Desktop Industry 280mm / 200g Python/G-code
9 MEX Robotics Pro Competition Grade 500+ parts C++
10 evive Starter Kit IoT Prototyping N/A C++ / Python
11 Elephant Robotics MechArm Small Footprint 270mm / 250g ROS/Python
12 Yahboom 4WD ROS SLAM Navigation 15 km range ROS / Python
13 SunFounder Raspberry Pi Car Vision Tracking 1080p Camera Python
14 UFactory xArm 6 High Repeatability 700mm / 5kg SDK / ROS
15 Niryo Ned2 Educational Cobot 440mm / 300g Python / ROS
16 TurtleBot 4 Research Platform LIDAR / IMU ROS 2 Humble
17 Unitree Go2 Pro Quadruped Research 18 km/h Python / SDK
18 Interbotix WidowX 250 Research Arm 650mm / 250g ROS 2 / C++
19 Clearpath Husky All-Terrain Research 4-Wheel Drive ROS
20 Dobot Magician 4-Axis Multifunction 320mm / 500g G-code/Script
21 Adeept Mars Rover Multi-Terrain WiFi Control Python
`;

const rawSTEMKits = `
1 LEGO SPIKE Prime (Best) Classroom Flex 10+ 528 pcs / 6-port hub
2 SPIKE Essential Foundational STEM 6+ 449 pcs / Light matrix
3 WhalesBot Rocky All-in-one Entry 8+ Sensors & Motor
4 Makeblock Ranger 3-in-1 Mobility 10+ Tank/Racer/Balance
5 BricQ Motion Prime Physics & Gears 12+ Pulleys / Motion
6 Quarky Ultimate 10+ Configs 10+ Humanoid/Rover
7 Avishkaar Robotics Pro Global Competition 12+ Metal Chassis
8 BricQ Motion Essential Basic Mechanics 6+ Sports-themed
9 Tweak Full 100+ Models 8+ Advanced Motion
10 MEX Robotics Advanced Autonomous logic 12+ 500+ components
11 Robolink Zumi Self-Driving AI 10+ Python/AI intro
12 VEX V5 Starter Competition Pro 14+ V5 Brain / Motors
13 Matatalab Tale-Bot Pro Early Literacy 3+ Interactive Map
14 Arduino Education Starter Open Source STEM 11+ 15+ Lessons
15 Diatone Taycan C3.1 Aero-Engineering 14+ FPV Physics
16 Piper Computer Kit Hardware + Software 8+ Raspberry Pi
17 Sphero BOLT Advanced Sensors 8+ LED Matrix / IR
18 Wonder Workshop Dash Problem Solving 6+ Story-driven apps
19 Modular Robotics Cubelets System Thinking 4+ Magnetic Blocks
20 Micro:bit Smart Home Automation 10+ OLED/Moisture sens
21 KIBO 21 Tangible Coding 4+ Wooden Blocks
`;

const rawAIKits = `
1 NVIDIA Isaac GR00T N1 (Best) Humanoid AI Jetson AGX Thor Foundation Models
2 Quarky Intellio Rover Vision-enabled AI ESP32-S3 / Cam TinyML / Vision
3 PiCar-X Visual Tracking Raspberry Pi 5 Face/Color Recog
4 Alpha Mini Social AI Voice/Face Recog Human Interaction
5 Intellio Discovery AR & ML Basics ESP32 / Mic Speech/AR
6 HiWonder JetMax Vision Arm Jetson Nano Sort/Auto-pick
7 Gemma 4 Dev Board Local LLM H100 / Blackwell Offline Reasoning
8 Mirobot AI Arm Neural Net Sort OpenCV Cam Reinforcement Lrn
9 NVIDIA JetBot Autonomous Drive Jetson Nano Deep Learning
10 Yahboom ROSmaster R2 Lidar Mapping Jetson Orin Nano SLAM / Navigation
11 OAK-D OpenCV Kit Spatial AI Luxonis Camera 3D Depth ML
12 Husarion Panther Outdoor ML PC / ROS 2 Path Planning
13 Petoi Bittle X Bio-inspired AI ESP32 / Voice Voice Commands
14 M5Stack UnitV2 Edge Computing Linux AI Camera Standalone ML
15 Waveshare JetRacer AI Racing Jetson Nano Lane Detection
16 Google AIY Voice NLP Intro Raspberry Pi Voice Assistant
17 DoraBot 6-Axis Logistical ML High-speed Cam Dynamic Sorting
18 SparkFun Edge Low-power ML Apollo3 Blue Gesture/Audio ML
19 BeagleBone AI-64 Industrial ML TDA4VM SoC Vision Processing
20 HuskyLens Easy AI Vision Plug-and-Play Object Tracking
21 Seeed Studio Grove AI Micro-ML Himax Sensor Edge Detection
`;

const rawMotorsServos = `
1 Hobbywing X11 Max (Best) Brushless Outrunner 28kg / Axis Industrial Heavy-Lift
2 T-Motor F60 Pro VII Brushless (Racing) 2.1kg Thrust FPV Racing/Freestyle
3 Savox SB-2292SG High-Torque Servo 31kg-cm Humanoid Limbs
4 BrotherHobby Avenger Brushless (Long Range) 1.8kg Thrust Cinematic/Long Range
5 Emax ECO II Brushless (Budget) 1.5kg Thrust Beginner Quads
6 Lewansoul LX-16A Serial Bus Servo 17kg-cm STEM Walking Robots
7 Hobbywing X6 Plus Industrial Motor 12kg Thrust Agricultural Drones
8 Molicel-Integrated Drive Smart Motor Varies High-End IoT
9 Dynamixel MX-106 Precision Servo 10.0N.m Pro-Grade Humanoids
10 Happymodel EX1103 Micro Brushless 120g Thrust Tiny Whoops/Micros
11 DJI 2312E Consumer Brushless 800g Thrust DIY Camera Drones
12 KST DS215MG Mini Coreless Servo 3.7kg-cm Helicopter Tail/Arms
13 Feetech STS3215 Smart Servo 19kg-cm Advanced STEM Bots
14 XING2 2207 Freestyle Motor 1.9kg Thrust Freestyle FPV
15 Standard Bots Actuator Pro Harmonic Drive 150N.m Industrial Cobots
16 TowerPro MG996R Standard Servo 11kg-cm Entry-Level Hobbyist
17 PowerVision Egg Motor Waterproof Outrunner 900g Thrust Amphibious Drones
18 FPV Cycle 25mm Cinematic Motor 2.3kg Thrust 5-7 inch Cine-builds
19 Hitec D954SW Waterproof Servo 29kg-cm Off-Road Rovers
20 BetaFPV 1102 Whoop Motor 90g Thrust Indoor Racing
21 Flywoo NIN 1404 Ultralight Motor 450g Thrust Sub-250g Long Range
`;

const rawSensors = `
1 ICM42688-P (Best) IMU / Gyro Ultra-Low Noise Drone Flight Stability
2 OAK-D S2 Spatial AI Cam Depth + AI On-chip Obstacle Avoidance
3 Benewake TFmini Plus LiDAR 12m Range / IP65 Altitude Hold
4 MS4525DO Pressure Sensor Digital Airspeed Long-Range Fixed-Wing
5 HuskyLens Vision Sensor Easy Face/Color Recog STEM AI Projects
6 BME280 Environmental Temp/Humid/Baro Weather Stations
7 Intel RealSense D435i Depth Camera Wide FOV / Global Shutter Warehouse Robots
8 MATEK Optical Flow Navigation GPS-free Position Hold Indoor Drones
9 VL53L1X Time-of-Flight Distance Sensor 4m Precise Range Robot Vacuum/Rover
10 MPU6000 Classic IMU Proven Reliability Budget FPV FCs
11 U-Blox M10 GPS Positioning Multi-GNSS Constellation Long Range Drone
12 HC-SR04+ Ultrasonic Simple 2cm-4m sensing Beginner STEM Bots
13 SGP40 Gas / VOC Indoor Air Quality Smart Home Robots
14 Pixy2 Smart Camera Line Following / Logic Line-Following Racers
15 HMC5883L Magnetometer Precision Compass Heading/Course Control
16 TFMini-L LiDAR Long-Range Laser 40m / High Speed Speed Trap / Mapping
17 RPLidar A1 360° LiDAR SLAM Support Autonomous Rovers
18 IMU BNO055 Absolute Orient 9-DOF Sensor Fusion VR/Bipedal Robots
19 DHT22 Basic Climate Digital Accuracy Garden Robots
20 Gravity pH Sensor Chemical Water Quality Aquaponics Bots
21 TTP223 Touch Interaction Capacitive Touch Interactive Humanoids
`;

const rawMCUs = `
1 STM32N6 (Best) High-End AI 800MHz + NPU Vision-Guided Robots
2 ESP32-P4 Espressif 400MHz / Dual Core Camera-Linked IoT
3 Raspberry Pi RP2350 Pico 2 150MHz / Dual Core DIY / STEM Projects
4 NXP i.MX RT1180 Crossover 800MHz / Real-time Industrial Controllers
5 Nordic nRF54 Wireless 320MHz / BLE 6.0 High-End Wearables
6 STM32H743 High Performance 480MHz Pro Flight Controllers
7 ESP32-S3 AI/IoT 240MHz + Vector AI Cameras / Voice
8 Renesas RA8 M85 Efficiency 480MHz / Cortex-M85 High-Compute IoT
9 Arduino R4 Minima Renesas 48MHz Advanced Education
10 Teensy 4.1 ARM Cortex-M7 600MHz Music / High-Speed I/O
11 ESP32-C6 Connectivity Wi-Fi 6 / Matter Smart Home Hubs
12 STM32F405 Workhorse 168MHz Budget FPV Drones
13 STM32U5 Low Power 160MHz Battery-Life Critical
14 Silicon Labs EFR32 Smart Home 80MHz + AI Accel Zigbee/Matter Sensors
15 STM32F722 High Speed 216MHz Mainstream Racing FCs
16 RP2040 Pi Foundation 133MHz Low-Cost Educational
17 K210 AI Chip RISC-V 400MHz + KPU Low-Power Vision AI
18 Arduino Uno R3 AVR 16MHz Beginner Basics
19 Micro:bit V2 Education 64MHz School Robotics
20 STM32L4 Ultra-Low Power 80MHz Health Tech / Medical
21 ATmega2560 AVR 16MHz Large 3D Printers/Bots
`;

const rawBatteriesPower = `
1 Xingto 360Wh/kg (Best) Semi-Solid State 24000mAh Industrial / Mapping
2 Tattu R-Line V5 LiPo 1550mAh / 150C Pro FPV Racing
3 Samsung 40T (21700) Li-Ion 4000mAh / 35A Long-Range Drones
4 Molicel P42A Li-Ion 4200mAh / 45A Performance Long Range
5 GNB (Gaoneng) HV LiHV 450mAh / 100C Tiny Whoops / Micros
6 CNHL Black Series LiPo 1300mAh / 100C Budget Racing
7 DJI Mavic 4 Intelligent LiPo 5000mAh Photography Drones
8 MATEK 5V/5A BEC Power Module Voltage Regulator Flight Control Power
9 Tattu 6S High Voltage LiHV 22000mAh Large Ag Drones
10 Sony VTC6 (18650) Li-Ion 3000mAh / 30A Lightweight Rovers
11 Lumenier Indestructible LiPo 1500mAh / 120C Freestyle Bashers
12 Turnigy Graphene LiPo 5000mAh / 65C Fixed-Wing Planes
13 Molicel P28A Li-Ion 2800mAh / 35A Sub-250g Builds
14 Dinogy Ultra Graphene LiPo 1300mAh / 80C Reliable Freestyle
15 Ovonic 100C LiPo 1550mAh / 100C Practice Racing
16 EFT Power Dist. Board PDB 100A Support Multi-Rotor Power
17 GNB 1S LiHV LiHV 300mAh / 80C Indoor Micro Whoops
18 Gens Ace Bashing LiPo 5000mAh / 50C RC Cars / Rovers
19 Holybro PM02 Power Module 12S Support Pixhawk Builds
20 Zippy Compact LiPo 2200mAh / 25C DIY Budget Drones
21 Bonka LiPo LiPo 1600mAh / 100C General Purpose FPV
`;

const rawRemoteControllers = `
1 DJI RC Pro 2 DJI O4
2 RadioMaster TX16S MKII ELRS/EdgeTX
3 RadioMaster Boxer ELRS
4 TBS Tango 2 Pro Crossfire
5 FrSky X20S Tandem
6 RadioMaster Pocket ELRS
7 FrSky Taranis X9D+ ACCESS
8 FlySky FS-i6X AFHDS 2A
9 FlySky NV14 AFHDS 3
10 Jiyi K-3A Pro Agri-Control
11 Jiyi K++ V2 Industrial
12 Radiolink AT9S Pro DSSS/FHSS
13 Jumper T-Pro ELRS
14 Spektrum NX10 DSMX
15 RadioMaster MT12 Surface/ELRS
16 BetaFPV LiteRadio 3 ELRS
17 FlySky FS-i6S AFHDS 2A
18 Futaba T16IZ FASSTest
19 Ethos X20 Pro Tandem
20 Jumper T14 ELRS (1W)
21 VK V9 Flight Controller Industrial FC
`;

const rawFPVGoggles = `
1 DJI Goggles 3 Digital 1080p
2 Walksnail Avatar X OLED / Digital
3 HDZero Goggles Zero Latency
4 Fat Shark Dominator Digital HD
5 Skyzone 04X Pro Analog OLED
6 Foxeer EV800D Diversity Box
7 Fat Shark Scout Analog Box
8 Walksnail VRX Digital Mod
9 DJI Integra Built-in Battery
10 Emax Transporter 2 Detachable Screen
11 DJI Goggles N3 Mid-range Digital
12 Skyzone SKY02O OLED Compact
13 Eachine EV300O Rapidmix OLED
14 Aomway Commander Analog Classic
15 TopSky Prime II Budget OLED
16 Quanum DIY V2 DIY Box
17 Eachine Cobra X LCD Box
18 BetaFPV VR03 Nano-pilot Goggle
19 Fat Shark Recon HD HDZero Box
20 Boscam GS923 Analog Heritage
21 FlySight Falcon HDMI Input
`;

const rawAISmartSystems = `
1 NVIDIA Jetson AGX Thor AI Board
2 OAK-D S2 Pro Vision Module
3 NVIDIA Jetson Orin Nano AI Board
4 ST-Leopard Multimodal Vision Module
5 DJI Dock 3 Automation
6 NVIDIA Isaac Sim Automation
7 Boston Dynamics Suite Automation
8 ROS 2 (Robot OS) Automation
9 Siemens Industrial Edge Automation
10 ABB Robotics IRB Automation
11 AWS RoboMaker Automation
12 Google Coral Dev Board AI Board
13 Intel RealSense D435i Vision Module
14 Raspberry Pi AI Kit AI Board
15 OpenAI Robotics API Automation
16 Universal Robots UR+ Automation
17 HuskyLens AI Cam Vision Module
18 Pixy2 Vision Sensor Vision Module
19 BeagleBone AI-64 AI Board
20 Arduino Portenta H7 AI Board
21 Stereolabs ZED 2i Vision Module
`;

const rawPartsAccessories = `
1 Martian IV Frame Frame
2 HQProp Ethix S5 Propeller
3 EFT E410P Agriculture Frame
4 iFlight Nazgul5 V3 Frame
5 Gemfan Hurricane Propeller
6 Amass XT60-H Connector
7 BNTECHGO Silicone Wire Wires
8 Mavic 4 Foldable Gear Landing Gear
9 Master Airscrew Stealth Propeller
10 EFT E610P Hexacopter Frame
11 AS150 Anti-Spark Connector
12 GepRC MK5X O3 Frame
13 Hobbywing X9 3411 Propeller
14 AXISFLYING Manta 6 Frame
15 IFLIGHT Chimera7 Frame
16 Dalprop Cyclone Propeller
17 Amass XT30U Connector
18 S500 Tall Skids Landing Gear
19 F450 Landing Leg Landing Gear
20 T-Motor SFP Series Propeller
21 Apex DC5 Deadcat Frame
`;

const rawToolsEquipment = `
1 KSGER T12 Station Soldering Kit
2 Pinecil V2 (USB-C) Repair Tool
3 ISDT BattGo BC-8S Testing Eq.
4 Miniware TS101 Repair Tool
5 Hakko FX-888D Soldering Kit
6 ToolkitRC MC8 Testing Eq.
7 Helping Hands (6-Arm) Repair Tool
8 Fnirsi HS-01 Soldering Kit
9 Wowstick 1P+ Electric Repair Tool
10 Tabiger Beginner Kit Soldering Kit
11 Weller 140W Gun Repair Tool
12 Weller WE1010 Soldering Kit
13 Yihua 995D+ Soldering Kit
14 ToolkitRC WM150 Testing Eq.
15 Propeller Balancer Testing Eq.
16 iFixit Pro Tech Kit Repair Tool
17 Lipo Voltage Checker Testing Eq.
18 Solder Sucker (Edsyn) Repair Tool
19 Fluke 101 Meter Testing Eq.
20 DSO150 Oscilloscope Testing Eq.
21 Sugon T26 Precision Repair Tool
`;

const rawCombosLearning = `
1 LEGO SPIKE Prime Educational Pack
2 DJI Neo 2 Combo Drone Combo
3 LEGO Mindstorms Robotics Starter
4 Elegoo Smart Car V4 Tutorial Kit
5 FlyRobo Quad Beginner Drone Combo
6 Arduino Student Kit Educational Pack
7 Pixhawk Hexacopter Kit Drone Combo
8 DJI Mavic 4 Fly More Drone Combo
9 SunFounder PiCar-X Tutorial Kit
10 DM002 DIY Quad Kit Robotics Starter
11 DJI Avata 2 Explorer Drone Combo
12 Zumi Self-Driving Car DIY Project
13 mBot Neo (CyberPi) Tutorial Kit
14 Potensic Atom 2 Combo Drone Combo
15 Sphero BOLT Starter Robotics Starter
16 Donkey Car AI Racing DIY Project
17 Micro:bit Smart Home Educational Pack
18 Line Following Robot DIY Project
19 Fire-Fighting Robot DIY Project
20 Gesture Robotic Arm DIY Project
21 Thames & Kosmos Kit Educational Pack
`;

const parseRawData = (rawText, categoryId, baseDesc) => {
  const lines = rawText.trim().split('\n');
  return lines.map((line, index) => {
    let model, price, specs = {}, rating, image;
    
    // Check if it's a drone or robot based on categoryId
    const isDrone = categoryId.includes('drone');

    if (isDrone) {
      const match = line.match(/^(\d+)\s+(.+?)\s+([\d.]+\s*km)\s+(.+?km\/h)\s+(\d+\s*mins)$/);
      if (match) {
        model = match[2].trim();
        specs = { Range: match[3], Speed: match[4], FlightTime: match[5] };
      } else {
        const parts = line.split(' ');
        const time = (parts.pop() || "") + " " + (parts.pop() || "");
        const speed = (parts.pop() || "") + " " + (parts.pop() || "");
        const range = (parts.pop() || "") + " " + (parts.pop() || "");
        parts.shift();
        model = parts.join(' ');
        specs = { Range: range, Speed: speed, FlightTime: time };
      }
      const basePriceMap = { 'camera-drones': 1800, 'racing-drones': 600, 'fpv-drones': 1200, 'beginner-drones': 200 };
      price = (basePriceMap[categoryId] || 500) * Math.pow(0.92, index) + 49.99;
    } else {
      // Robotics Parsing
      const rank = line.match(/^\d+/)?.[0] || index + 1;
      const lineWithoutRank = line.replace(/^\d+\s+/, '');
      
      if (categoryId === 'beginner-kits') {
        // Format: Model (Best) Focus Price Programming
        const m = lineWithoutRank.match(/(.+?)\s+(.+?)\s+(\$\d+)\s+(.+)$/);
        if (m) {
          model = m[1].trim();
          specs = { Focus: m[2], Programming: m[4] };
          price = parseFloat(m[3].replace('$', ''));
        }
      } else if (categoryId === 'advanced-kits') {
        // Format: Model Focus Reach/Payload Programming
        const m = lineWithoutRank.match(/(.+?)\s+(.+?)\s+([\d.m/kg\s]+|N\/A|LIDAR.+?)\s+([A-Z\d].+)$/);
        if (m) {
          model = m[1].trim();
          specs = { Focus: m[2], "Reach/Payload": m[3], Programming: m[4] };
          price = 500 * Math.pow(0.92, index) + 299;
        }
      } else if (categoryId === 'stem-learning') {
        // Format: Model Focus Age Components
        const m = lineWithoutRank.match(/(.+?)\s+(.+?)\s+(\d+\+)\s+(.+)$/);
        if (m) {
          model = m[1].trim();
          specs = { Focus: m[2], Age: m[3], Components: m[4] };
          price = 300 * Math.pow(0.92, index) + 49;
        }
      } else if (categoryId === 'ai-ml-robots') {
        // Format: Model Focus Hardware Capability
        const m = lineWithoutRank.match(/(.+?)\s+(.+?)\s+([A-Z\d].+?)\s+([A-Z][a-z].+)$/);
        if (m) {
          model = m[1].trim();
          specs = { Focus: m[2], Hardware: m[3], Capability: m[4] };
          price = 1200 * Math.pow(0.92, index) + 199;
        }
      } else if (categoryId === 'motors-servos') {
        // Format: Model Type Torque/Thrust BestUseCase
        const m = lineWithoutRank.match(/(.+?)\s+([A-Z][a-z].+?)\s+([\d.a-z/ -]+?)\s+([A-Z][a-z].+)$/);
        if (m) {
          model = m[1].trim();
          specs = { Type: m[2], "Torque/Thrust": m[3], UseCase: m[4] };
          price = 400 * Math.pow(0.92, index) + 29;
        }
      } else if (categoryId === 'sensors') {
        // Format: Model Category KeyFeature BestUseCase
        const m = lineWithoutRank.match(/(.+?)\s+([A-Z][a-z\s/].+?)\s+([A-Z\d].+?)\s+([A-Z][a-z].+)$/);
        if (m) {
          model = m[1].trim();
          specs = { Category: m[2], Feature: m[3], UseCase: m[4] };
          price = 150 * Math.pow(0.92, index) + 12;
        }
      } else if (categoryId === 'microcontrollers') {
        // Format: Model Series CoreSpeed BestUseCase
        const m = lineWithoutRank.match(/(.+?)\s+([A-Z\d].+?)\s+([\d.A-Z\s/+]+?)\s+([A-Z][a-z].+)$/);
        if (m) {
          model = m[1].trim();
          specs = { Series: m[2], Speed: m[3], UseCase: m[4] };
          price = 100 * Math.pow(0.92, index) + 9;
        }
      } else if (categoryId === 'batteries-power') {
        // Format: Model Chemistry Capacity/C-Rate BestUseCase
        const m = lineWithoutRank.match(/(.+?)\s+([A-Z][a-z\s-].+?)\s+([\d.A-Za-z/ -]+?)\s+([A-Z][a-z].+)$/);
        if (m) {
          model = m[1].trim();
          specs = { Chemistry: m[2], Capacity: m[3], UseCase: m[4] };
          price = 250 * Math.pow(0.92, index) + 19;
        }
      } else if (categoryId === 'remote-controllers') {
        // Format: Model Protocol
        const m = lineWithoutRank.match(/(.+?)\s+([A-Z\d].+)$/);
        if (m) {
          model = m[1].trim();
          specs = { Protocol: m[2] };
          price = 400 * Math.pow(0.92, index) + 89;
        }
      } else if (categoryId === 'fpv-goggles') {
        // Format: Model Feature
        const m = lineWithoutRank.match(/(.+?)\s+([A-Z][a-z].+)$/);
        if (m) {
          model = m[1].trim();
          specs = { Feature: m[2] };
          price = 600 * Math.pow(0.92, index) + 149;
        }
      } else if (categoryId === 'ai-boards' || categoryId === 'vision-modules' || categoryId === 'automation' || categoryId === 'ai-smart-systems') {
        // Format: Item Category
        const m = lineWithoutRank.match(/(.+?)\s+([A-Z][a-z\s].+)$/);
        if (m) {
          model = m[1].trim();
          specs = { Category: m[2] };
          price = 800 * Math.pow(0.92, index) + 49;
        }
      } else if (categoryId === 'frames-chassis' || categoryId === 'propellers' || categoryId === 'landing-gear' || categoryId === 'wires-connectors' || categoryId === 'parts-accessories') {
        // Format: Item Category
        const m = lineWithoutRank.match(/(.+?)\s+([A-Z][a-z\s].+)$/);
        if (m) {
          model = m[1].trim();
          specs = { Category: m[2] };
          price = 50 * Math.pow(0.92, index) + 9;
        }
      } else if (categoryId === 'soldering-kits' || categoryId === 'repair-tools' || categoryId === 'testing-equipment' || categoryId === 'tools-equipment') {
        // Format: Gadget Category
        const m = lineWithoutRank.match(/(.+?)\s+([A-Z][a-z\s].+)$/);
        if (m) {
          model = m[1].trim();
          specs = { Category: m[2] };
          price = 150 * Math.pow(0.92, index) + 15;
        }
      } else if (categoryId === 'educational-packs' || categoryId === 'drone-accessories' || categoryId === 'robotics-starters' || categoryId === 'diy-projects' || categoryId === 'tutorial-kits' || categoryId === 'combos-learning') {
        // Format: Item Category
        const m = lineWithoutRank.match(/(.+?)\s+([A-Z][a-z\s].+)$/);
        if (m) {
          model = m[1].trim();
          specs = { Category: m[2] };
          price = 300 * Math.pow(0.92, index) + 59;
        }
      }

      // Final fallback if regex fails
      if (!model) {
        const p = lineWithoutRank.split('  ').filter(x => x);
        model = p[0] || `Robot ${index+1}`;
        price = price || (100 + index * 20);
      }
    }
    
    // Common fields
    rating = model.includes('(Best)') ? 5.0 : parseFloat((4.0 + (21-index)*0.04).toFixed(1));
    
    // Title-Specific Image Search Logic
    // This takes the product name and converts it into search keywords
    const searchKeywords = model
      .toLowerCase()
      .replace(/\(best\)/g, '') // Remove (Best) from search
      .replace(/[^a-z0-9\s]/g, '') // Remove special chars
      .trim()
      .replace(/\s+/g, ','); // Comma separated keywords
    
    // Priority 1: High-fidelity Local Assets for "Best" items
    const premiumAssets = {
      'mBot (Best)': '/assets/mbot_robot.png',
      'Arctos 6-Axis Arm (Best)': '/assets/arctos_arm.png',
      'LEGO SPIKE Prime (Best)': '/assets/lego_spike_prime.png',
      'NVIDIA Isaac GR00T N1 (Best)': '/assets/nvidia_groot_robot.png',
      'Hobbywing X11 Max (Best)': '/assets/hobbywing_x11_max.png',
      'ICM42688-P (Best)': '/assets/icm42688_sensor.png'
    };

    if (premiumAssets[model]) {
      image = premiumAssets[model];
    } else if (model.includes('Gimbal')) {
      image = '/assets/gimbal_3d.png';
    } else if (categoryId.includes('drone')) {
      // Drones use our high-quality drone assets if not a specific "Best" model
      const droneAssets = ['/assets/drone_3d.png', '/assets/drone_hero_final.png', '/assets/drone_pedestal_3d.png'];
      image = droneAssets[index % droneAssets.length];
    } else {
      // All other gadgets use Title-Specific Search
      image = `https://loremflickr.com/800/600/${searchKeywords},gadget,tech?lock=${index}`;
    }

    return {
      id: `prod_${categoryId}_${index+1}`,

      categoryId: categoryId,
      name: model,
      price: parseFloat(price.toFixed(2)),
      image: image,
      rating: rating,
      reviews: Math.floor(1000 * Math.pow(0.85, index)) + 12,
      description: `${model} ${baseDesc}. It features ${Object.entries(specs).map(([k,v]) => `${k}: ${v}`).join(', ')}.`,
      specs: specs,
      stockStatus: index % 5 === 2 ? 'Out of Stock' : 'In Stock'
    };
  });
};

const cameraDrones = parseRawData(rawCameraDrones, 'camera-drones', 'is a top-tier camera drone tailored for optimal cinematic captures');
const racingDrones = parseRawData(rawRacingDrones, 'racing-drones', 'is built for uncompromising speed, agility, and competitive performance');
const fpvDrones = parseRawData(rawFPVDrones, 'fpv-drones', 'is focused on immersive FPV flying, extreme freestyle capabilities, and acrobatics');
const beginnerDrones = parseRawData(rawBeginnerDrones, 'beginner-drones', 'is a user-friendly and highly durable drone loaded with beginner-level safety features');

const beginnerKits = parseRawData(rawBeginnerKits, 'beginner-kits', 'is an entry-level robotics kit perfect for those starting their automation journey');
const advancedKits = parseRawData(rawAdvancedKits, 'advanced-kits', 'is a professional-grade robotics platform designed for complex engineering and research');
const stemKits = parseRawData(rawSTEMKits, 'stem-learning', 'is a curriculum-aligned educational kit built to foster critical thinking and STEM skills');
const aiKits = parseRawData(rawAIKits, 'ai-ml-robots', 'is a cutting-edge AI robotics kit focused on machine learning and autonomous reasoning');

const motorsServos = parseRawData(rawMotorsServos, 'motors-servos', 'is a high-performance propulsion or actuation unit designed for robotic precision');
const sensors = parseRawData(rawSensors, 'sensors', 'is a state-of-the-art sensing module providing critical environmental and positional data');
const mcus = parseRawData(rawMCUs, 'microcontrollers', 'is a powerful computation unit acting as the brain of advanced robotic systems');
const batteriesPower = parseRawData(rawBatteriesPower, 'batteries-power', 'is a high-energy power source optimized for extended mission durations');

const remoteControllers = parseRawData(rawRemoteControllers, 'remote-controllers', 'is a professional-grade remote controller ensuring ultra-low latency and precision control');
const fpvGoggles = parseRawData(rawFPVGoggles, 'fpv-goggles', 'is an immersive FPV goggle providing high-definition visual feedback for pilots');
const aiSmartSystems = parseRawData(rawAISmartSystems, 'ai-smart-systems', 'is an advanced AI component designed for autonomous robotic reasoning and vision');
const partsAccessories = parseRawData(rawPartsAccessories, 'parts-accessories', 'is a high-quality structural or electrical component for drone and robot construction');
const toolsEquipment = parseRawData(rawToolsEquipment, 'tools-equipment', 'is a professional-grade workshop tool essential for building and repairing robotics');
const combosLearning = parseRawData(rawCombosLearning, 'combos-learning', 'is a comprehensive learning kit or combo package designed for students and hobbyists');

export const mockProducts = [
  ...cameraDrones, ...racingDrones, ...fpvDrones, ...beginnerDrones,
  ...beginnerKits, ...advancedKits, ...stemKits, ...aiKits,
  ...motorsServos, ...sensors, ...mcus, ...batteriesPower,
  ...remoteControllers, ...fpvGoggles, ...aiSmartSystems, ...partsAccessories, ...toolsEquipment, ...combosLearning
];

export const getProductsByCategory = (categoryId) => {
  return mockProducts.filter(p => p.categoryId === categoryId);
}

export const getProductById = (id) => {
  return mockProducts.find(p => p.id === id);
}

export const getCategoryName = (categoryId) => {
  return categoryId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
