// import React, { useState, useEffect } from 'react';
// const AlertPanel = ({ message, duration, onClose }) => {
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       onClose();
//     }, duration);

//     return () => {
//       clearTimeout(timer);
//     };
//   }, [duration, onClose]);

//   return (
//   <div className="validation"><h2>login failed invalid email-id or password</h2></div>
//   );
// };

// export default AlertPanel 