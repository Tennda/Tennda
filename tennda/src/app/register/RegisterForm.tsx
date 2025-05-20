'use client';

import { useState } from 'react';
import InputField from '@/components/ui/InputField';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    staffId: '',
    fullName: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({
    staffId: '',
    fullName: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };
    if (!formData.staffId.trim()) {
      newErrors.staffId = 'Staff ID is required';
      valid = false;
    }
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
      valid = false;
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      valid = false;
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit form data
      alert('Registration successful!');
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center">
      <div
        className="relative"
        style={{
          width: 'min(98vw, 1300px)',
          minHeight: '480px',
          borderRadius: '15px',
        }}
      >
        {/* Glassmorphism background */}
        <div className="absolute inset-0 rounded-[15px] border-4 border-white/40 shadow-2xl backdrop-blur-2xl bg-white/5 pointer-events-none"></div>
        {/* Card content */}
        <div
          className="relative rounded-[15px] shadow-2xl p-4 w-full h-full border"
          style={{
            background: 'rgba(255,255,255,0.15)',
            border: '2px solid rgba(255,255,255,0.4)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
          }}
        >
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InputField
                name="staffId" label="Enter your staff ID"
                value={formData.staffId}
                onChange={handleChange}
                required
                error={errors.staffId}
                className="bg-[#d6d6d6bf] rounded-[15px] p-6 w-full"
              />
              <InputField
                name="fullName" label="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
                error={errors.fullName}
                className="bg-[#d6d6d6bf] rounded-[15px] p-6 w-full"
              />
            </div>
            <InputField
              name="password" type="password" label="Create a password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              className="bg-[#d6d6d6bf] rounded-[15px] p-6 w-full"
            />
            <InputField
              name="confirmPassword" type="password" label="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
              className="bg-[#d6d6d6bf] rounded-[15px] p-6 w-full"
            />
            <div className="flex justify-center mt-12">
              <Button 
                type="submit" className="bg-[#6c63ff] hover:bg-[#5a52d5] text-white px-16 py-4 rounded-md flex items-center"
              >
                <span className="text-xl font-semibold">Register</span>
                <img src="/images/img_vector_25x26.svg" alt="" className="ml-2 w-[25px] h-[26px]" />
              </Button>
            </div>
          </form>
          <div className="text-center mt-10">
            <p className="text-[22px] text-[#1a1a1ae5]">
              Already Registered? <Link href="/login" className="text-[#6c63ff] hover:underline">login here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}