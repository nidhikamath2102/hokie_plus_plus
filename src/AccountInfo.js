import React from 'react';

function AccountInfo() {
  // Replace with actual user data fetching logic
  const user = {
    email: 'user@example.com',
    firstName: 'John',
    lastName: 'Doe',
    profilePicture: 'path_to_profile_picture.png'
  };

  return (
    <div className="account-info">
      <img src={user.profilePicture} alt="Profile" className="profile-picture" />
      <p>Email: {user.email}</p>
      <p>First Name: {user.firstName}</p>
      <p>Last Name: {user.lastName}</p>
    </div>
  );
}

export default AccountInfo;