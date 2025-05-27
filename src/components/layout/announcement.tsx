import React from 'react'

const Announcement = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <img src="/svg/mobile-nav-top-left.svg" alt="Left" style={{ height: '40px' }} />
      <span style={{ margin: '0 16px', flex: 1, textAlign: 'center' }}>Your announcement text goes here</span>
      <img src="/svg/mobile-nav-top-right.svg" alt="Right" style={{ height: '40px' }} />
    </div>
  )
}

export default Announcement;
