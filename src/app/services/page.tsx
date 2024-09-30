import React from 'react';
import ServicesCard from '@/components/Service/ServicesCard';
import Image from 'next/image';
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Services - Tesla Hi-Tech 3T MRI Amazing &amp; Diagnostic Center",
    keywords:"Tesla Hi-Tech 3T MRI Amazing &amp; Diagnostic Center",
    description:"Tesla Hi-Tech 3T MRI Amazing &amp; Diagnostic Center"
  }

const page = () => {
  return (
    <>
        <div className="relative w-full h-64"> {/* Container with relative positioning */}
            <Image
                src="/Image/Services/hero-bg.png" // Replace with your image path
                alt="Descriptive text for the image"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0" // Cover the entire container
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-transparent bg-opacity-50 p-4 rounded-lg"> {/* Background with opacity */}
                    <h1 className="text-white text-3xl mt-24 font-bold">
                        Our Service
                    </h1>
                </div>
            </div>
        </div>
    
        <ServicesCard 
            id="mri-service-card"
            ServiceTitle="MRI"
            showDetails="MRI, or 3 Tesla Magnetic Resonance Imaging, is an advanced imaging technology that uses a powerful 3 Tesla magnetic field to produce highly detailed images of the body's internal structures. This high magnetic field strength results in clearer and more precise images compared to lower-strength MRI systems, making 3T MRI an essential tool in modern diagnostics."
            hideDetails="
                <strong>• Explanation of the Technology or Procedure</strong>
                <p>During a 3T MRI scan, the patient lies on a table that slides into a cylindrical scanner. The strong magnetic field aligns hydrogen protons in the body, and radiofrequency pulses are applied to disturb this alignment. As protons return to their original state, they emit signals detected by the MRI machine. These signals are then processed by a computer to generate high-resolution images. This technology is particularly beneficial for imaging the brain, spine, musculoskeletal system, and small anatomical structures requiring high detail.</p>
                <strong>• Benefits of the Service</strong>
                <p>Enhanced Image Quality: The 3T MRI provides clearer and more detailed images, crucial for diagnosing complex conditions and planning treatments.</p>
                <p>Improved Diagnostic Accuracy: High-resolution images reveal minute abnormalities, aiding in accurate diagnosis of neurological conditions, musculoskeletal injuries, and more.</p>
                <p>Faster Scanning Times: 3T MRI scans are completed more quickly, improving patient comfort and imaging efficiency.</p>
                <p>Advanced Imaging Techniques: Supports advanced techniques like functional MRI (fMRI) and diffusion tensor imaging (DTI), providing comprehensive information about brain function and tissue structure.</p>
                <p>Reduced Need for Contrast Agents: Superior image quality often reduces the need for contrast agents, beneficial for patients with allergies or kidney issues.</p>
                <p>Non-Invasive and Safe: 3T MRI is non-invasive, uses no ionizing radiation, and is suitable for patients of all ages, allowing repeated use without radiation risks.</p>
                <p>Versatility: Applicable to various medical specialties, including neurology, orthopedics, cardiology, and oncology, making it a vital diagnostic tool.</p>
                <p>Improved Patient Comfort: Modern 3T MRI machines are designed for patient comfort with larger bore sizes and faster scan times.</p>
                <p>Research and Innovation: Crucial in medical research, contributing to new discoveries and advancements in diagnostics and treatment.</p>
                <p>Future-Proof Technology: Supports emerging imaging techniques, ensuring 3T MRI remains a cornerstone of diagnostic imaging.</p>
            "
        />

        <ServicesCard
            id="32-slice-ct-scan"
            ServiceTitle="32 Slice CT Scan"
            showDetails="A 32-Slice CT (Computed Tomography) scan, offered by Tesla Hi-Tech 3T MRI Amazing & Diagnostic Centre in Pune, uses advanced imaging technology to create detailed cross-sectional images of the body. The '32-slice' refers to the scanner's ability to capture 32 slices of images simultaneously, resulting in high-resolution, precise images. This capability is essential for diagnosing a variety of medical conditions, including cardiovascular diseases, cancers, trauma injuries, and neurological disorders."
            hideDetails="
                <strong>• Explanation of the Technology or Procedure</strong>
                <p>During a 32-slice CT scan, the patient lies on a motorized table that slides into the CT scanner. The X-ray tube rotates around the patient, emitting X-ray beams that pass through the body and are detected by 32 rows of detectors. The captured data reflects the different densities of tissues and organs, which a computer processes into cross-sectional images. These images can be viewed individually or combined into a 3D representation of the scanned area. Sometimes, a contrast agent is used to enhance the visibility of specific structures.</p>
                <strong>• Benefits of the Service</strong>
                <p>High-Resolution Images</p>
                <p>Faster Scanning Times</p>
                <p>Comprehensive Diagnostic Capability</p>
                <p>Non-Invasive and Painless</p>
                <p>3D Reconstruction and Advanced Imaging Techniques</p>
            "
        />

        <ServicesCard
            id="ct-guided-interventional"
            ServiceTitle="CT Guided Interventional"
            showDetails="CT-guided interventional procedures use advanced imaging technology to precisely guide minimally invasive treatments. This technique leverages the clarity and accuracy of computed tomography (CT) imaging to perform procedures such as biopsies, drain placements, and ablations with pinpoint accuracy, enhancing treatment outcomes and patient safety."
            hideDetails="
                <strong>• Explanation of the Technology or Procedure:</strong>
                <p>During a CT-guided procedure, the patient is positioned on a CT scanner table. Real-time CT images are captured to guide the physician in navigating instruments to the target area. This continuous imaging allows for precise adjustments and accurate placement of needles or catheters. For example, in a biopsy, the CT images help the physician guide a needle to the exact location of the abnormal tissue to collect a sample for analysis.</p>
                <strong>• Key Benefits and Why It Is Important</strong>
                <p>Precision and Accuracy: Real-time CT imaging ensures precise targeting of the treatment area, reducing the risk of damage to surrounding tissues.</p>
                <p>Minimally Invasive: These procedures typically involve small incisions or punctures, leading to shorter recovery times and less post-procedure discomfort compared to traditional surgery.</p>
                <p>Enhanced Safety: Continuous imaging during the procedure minimizes complications and improves safety by allowing the physician to see exactly where instruments are placed.</p>
                <p>Wide Range of Applications: CT-guided procedures can be used for biopsies, drain placements, tumor ablations, and pain management injections, among others.</p>
                <p>Reduced Need for Surgery: Many conditions that once required open surgery can now be treated with CT-guided interventions, reducing overall healthcare costs and patient recovery times.</p>
                <p>Real-Time Feedback: The ability to make adjustments during the procedure based on live imaging feedback enhances the success rate of treatments.</p>
            "
        />


        <ServicesCard
            id="pathology-lab"
            ServiceTitle="Pathology Lab(Blood Test)"
            showDetails="Our pathology lab offers a comprehensive range of blood tests designed to provide accurate and timely diagnostic information. These tests are essential for detecting various health conditions, monitoring chronic diseases, and guiding treatment plans. With state-of-the-art equipment and highly skilled technicians, we ensure precise and reliable results for all our patients."
            hideDetails="
                <strong>• Explanation of the Technology or Procedure</strong>
                <p>Blood tests involve drawing a small sample of blood from the patient, typically from a vein in the arm. This sample is then analyzed using advanced laboratory equipment to measure different components such as red and white blood cells, hemoglobin, platelets, electrolytes, enzymes, hormones, and various other substances. The specific tests conducted depend on the patient’s symptoms and the doctor’s recommendations.</p>
                <strong>• Key Benefits and Why It Is Important</strong>
                <p>Accurate Diagnosis: Blood tests help in diagnosing a wide range of conditions, from infections and anemia to diabetes and heart disease.</p>
                <p>Monitoring Health Conditions: They are crucial for monitoring chronic conditions like diabetes, hypertension, and cholesterol levels, enabling effective management of these diseases.</p>
                <p>Guiding Treatment Plans: Blood test results provide valuable information that aids in creating and adjusting treatment plans, ensuring the best possible patient outcomes.</p>
                <p>Preventive Healthcare: Regular blood tests can detect potential health issues early, allowing for preventive measures to be taken before serious problems develop.</p>
                <p>Comprehensive Health Assessment: They offer a complete picture of a patient’s health, identifying imbalances or deficiencies that may not yet have manifested as symptoms.</p>
                <p>Safety and Comfort: Our pathology lab ensures a safe and comfortable experience for patients during blood sample collection, with minimal discomfort and quick procedures.</p>
                <p>Speedy Results: We provide prompt test results, enabling timely medical decisions and interventions.</p>
                <p>Advanced Technology: Utilizing the latest laboratory technology ensures high precision and accuracy in test results.</p>
                <p>Qualified Professionals: Our team of experienced pathologists and lab technicians are dedicated to maintaining the highest standards of testing and patient care.</p>
            "
        />

        <ServicesCard
            id="usg-color-doppler"
            ServiceTitle="USG & color Doppler"
            showDetails="USG (Ultrasound Sonography) & Color Doppler is a non-invasive imaging technology that uses high-frequency sound waves to create images of the body's internal structures. The Color Doppler adds functionality by measuring and visualizing blood flow within vessels, providing both anatomical and functional information."
            hideDetails=" 
                <strong>• Explanation of the Technology or Procedure</strong>
                <p>During a USG & Color Doppler examination, a handheld device called a transducer is placed on the skin after applying a special gel. The transducer emits sound waves that bounce off internal structures and are captured back, creating real-time images on a monitor. The Color Doppler aspect uses the Doppler effect to measure the direction and speed of blood flow, adding color-coded maps to the grayscale images.</p>
                <strong>• Key Benefits and Why It Is Important</strong>
                <p>Non-Invasive and Safe: The procedure is painless, does not use ionizing radiation, and is safe for patients of all ages, including pregnant women and fetuses.</p>
                <p>Real-Time Imaging: Provides immediate visual feedback, useful for dynamic assessments of organs and blood flow.</p>
                <p>Diagnosis and Monitoring: Essential for diagnosing and monitoring a variety of conditions, including vascular diseases, cardiac issues, and abnormalities in organs.</p>
                <p>Guidance for Procedures: Often used to guide minimally invasive procedures, such as needle biopsies or catheter placements.</p>
                <p>Cost-Effective: Typically less expensive compared to other imaging modalities like CT or MRI.</p>
                <p>Versatility: Applicable to multiple medical specialties, including cardiology, obstetrics, gynecology, and urology.</p>
            "
        />

        <ServicesCard
            id="x-ray"
            ServiceTitle="X-ray & X-Ray Procudeures"
            showDetails="X-Ray is a widely used imaging technique that utilizes electromagnetic radiation to produce images of the inside of the body. It is particularly effective for visualizing bones, detecting fractures, and identifying infections, tumors, and other conditions. X-Ray procedures are quick, non-invasive, and essential tools in medical diagnostics."
            hideDetails="
                <strong>• Explanation of the Technology or Procedure</strong>
                <p>During an X-Ray procedure, the patient is positioned so that the part of the body to be examined is placed between an X-Ray machine and a detector. The machine emits a small amount of radiation that passes through the body and is captured by the detector, creating an image. Dense structures, like bones, appear white on the X-Ray image, while softer tissues appear in shades of gray.</p>
                <strong>• Key Benefits and Why It Is Important</strong>
                <p>Quick and Efficient: X-Ray procedures are typically fast, often taking just a few minutes, making them ideal for emergency situations</p>
                <p>Non-Invasive: X-Ray imaging is non-invasive, causing no pain and requiring no recovery time.</p>
                <p>Wide Applicability: Useful for diagnosing a variety of conditions, including bone fractures, joint dislocations, infections, and lung conditions.</p>
                <p>Cost-Effective: Generally more affordable compared to other imaging modalities like MRI and CT scans.</p>
                <p>Minimal Radiation Exposure: Modern X-Ray machines use minimal radiation, ensuring patient safety while providing high-quality images.</p>
                <p>Immediate Results: X-Ray images can be viewed almost instantly, aiding in rapid diagnosis and treatment planning.</p>
            "
        />

        <ServicesCard
            
            ServiceTitle="ECG & Stress Test"
            showDetails="Electrocardiography (ECG) and Stress Tests are essential diagnostic tools used to assess heart health and function. An ECG measures the electrical activity of the heart, providing valuable information about heart rhythm and identifying potential issues. A Stress Test, often performed on a treadmill or stationary bike, monitors the heart’s response to physical exertion, helping to detect conditions that might not be evident at rest."
            hideDetails="
                <strong>• Explanation of the Technology or Procedure:</strong>
                <p>During an ECG, electrodes are placed on the patient’s chest, arms, and legs to detect electrical signals from the heart. These signals are recorded and displayed as waves on a monitor or printed on paper. The test is quick, non-invasive, and typically takes about 5-10 minutes.</p>
                <strong>• Stress Test</strong>
                <p>For a Stress Test, the patient exercises on a treadmill or stationary bike while being monitored. The intensity of the exercise gradually increases, and the heart's activity is continuously recorded via an ECG. Blood pressure and other vital signs are also monitored. The test helps to identify how well the heart functions under stress and can uncover issues such as coronary artery disease or abnormal heart rhythms.</p>
                <strong>• Key Benefits and Why It Is Important</strong>
                <p>Non-Invasive: Both ECG and Stress Tests are non-invasive procedures, making them safe and comfortable for patients.</p>
                <p>Early Detection: These tests can detect heart conditions early, allowing for timely intervention and management.</p>
                <p>Assess Heart Function: They provide crucial information about heart rhythm, electrical activity, and the heart’s response to physical activity.</p>
                <p>Guide Treatment: Results from these tests help doctors develop appropriate treatment plans and monitor the effectiveness of therapies.</p>
                <p>Preventive Care: Regular testing can help in the prevention of serious heart conditions by identifying risk factors early.</p>
                <p>Monitoring: Useful for ongoing monitoring of known heart conditions, ensuring effective management.</p>
            "
            id="ecg-stress-test"
        />

        <ServicesCard
            id="2d-echo"
            ServiceTitle="2D Echo"
            showDetails="2D Echocardiography (2D Echo) is a non-invasive imaging technique used to visualize the heart's structure and function in real-time. It uses ultrasound waves to create detailed images of the heart's chambers, valves, walls, and blood vessels. This test is crucial for diagnosing and monitoring various heart conditions."
            hideDetails="
                <strong>• Explanation of the Technology or Procedure</strong><p>During a 2D Echo, a transducer (ultrasound probe) is placed on the patient’s chest. The transducer emits high-frequency sound waves that bounce off the heart structures and return as echoes. These echoes are captured and converted into moving images displayed on a monitor. The procedure typically takes about 30-60 minutes and does not require any special preparation.</p> 
                <strong>• Key Benefits and Why It Is Important</strong>
                <p>Non-Invasive and Safe: 2D Echo is a non-invasive test that does not use ionizing radiation, making it safe for patients of all ages.</p>
                <p>Detailed Heart Visualization: Provides real-time images of the heart's structure and function, helping to assess heart health accurately.</p>
                <p>Early Detection: Helps in the early detection of heart conditions such as valve disorders, cardiomyopathy, pericardial disease, and congenital heart defects.</p>
                <p>Guides Treatment: The detailed images help doctors in planning appropriate treatments and monitoring their effectiveness.</p>
                <p>Versatile Diagnostic Tool: Useful for evaluating heart function in patients with symptoms like chest pain, shortness of breath, or palpitations.</p>
                <p>Monitoring: Ideal for ongoing monitoring of known heart conditions to track progression and response to treatment.</p>
            "
        />
     
    </>

  )
}

export default page;