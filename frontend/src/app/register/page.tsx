import RegisterForm from './RegisterForm';

export default function LecturerRegistration() {
  return (
    <div className="relative w-full h-[100vh] bg-gray-200 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-[140px] left-0">
        <img src="assets/images/img_ellipse_4.png" alt="" className="w-[247px] h-[240px] rounded-[120px]" />
      </div>
      <div className="absolute top-[600px] right-[13px]">
        <img src="assets/images/img_ellipse_5.png" alt="" className="w-[360px] h-[360px] rounded-[180px]" />
      </div>
      <div className="absolute top-[95px] right-[12px]">
        <img src="assets/images/img_vector.png" alt="" className="w-[387px] h-[340px]" />
      </div>
      <div className="absolute top-[561px] left-0">
        <img src="assets/images/img_vector_463x463.png" alt="" className="w-[463px] h-[463px]" />
      </div>

      {/* Full-width horizontal white bar for header accent */}
      <div
        className="absolute z-30 bg-white rounded-[30px] shadow"
        style={{
          width: '100vw',
          height: '119px',
          top: '-10px',
          left: 0,
          padding: '10px',
          gap: '10px',
        }}
      />

      {/* Header on top of the white bar */}
      <div
        className="absolute z-40 flex items-center justify-between px-16"
        style={{
          width: '100vw',
          height: '119px',
          top: '-10px',
          left: 0,
        }}
      >
        <img src="assets/images/img_tennda_png_2.png" alt="Tennda Logo" className="h-[180px] w-auto object-contain mt-[80px]" />
        <h1 className="text-3xl font-semibold text-black">
          Lecturer Registration
        </h1>
      </div>

      {/* Secondary glassmorphism box behind the main card, positioned and sized to touch right images */}
      <div
        className="absolute z-10 flex flex-col items-center justify-start"
        style={{
          width: '1550px',
          height: 'min(80vh, 700px)',
          top: '150px',
          left: '50%',
          transform: 'translateX(-50%)',
          borderRadius: '30px',
          border: '3px solid rgba(255,255,255,0.4)',
          background: 'rgba(255,255,255,0.08)',
          backdropFilter: 'blur(24px)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
          paddingTop: '24px',
        }}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full px-16 mb-2">
          <div className="flex items-center">
            <img src="assets/images/img_4211112_2.png" alt="" className="w-[75px] h-[75px]" />
            <h2 className="text-[32px] font-bold text-[#6c63ff] ml-4">Register as a Lecturer</h2>
          </div>
          <p className="text-2xl text-black mt-6 md:mt-0 md:text-right">
            Fill in your details to register in the system
          </p>
        </div>
        {/* Main card under the header */}
        <div className="flex justify-center w-full mt-[-180px]">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}