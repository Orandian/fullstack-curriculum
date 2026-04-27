'use client'
import { useRouter } from 'next/router'

export default function LanguageSwitcher() {
  const router = useRouter()
  const isJapanese = router.asPath.startsWith('/ja')

  function toggle() {
    if (isJapanese) {
      // Strip /ja prefix
      const newPath = router.asPath.replace(/^\/ja/, '') || '/'
      router.push(newPath)
    } else {
      // Add /ja prefix
      const newPath = '/ja' + (router.asPath === '/' ? '' : router.asPath)
      router.push(newPath)
    }
  }

  return (
    <button
      onClick={toggle}
      title={isJapanese ? 'Switch to English' : '日本語に切り替え'}
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '0.75rem',
        fontWeight: 700,
        letterSpacing: '0.08em',
        color: isJapanese ? '#ff00ff' : '#00e5ff',
        border: `1px solid ${isJapanese ? '#ff00ff' : '#00e5ff'}`,
        borderRadius: '4px',
        padding: '0.25rem 0.6rem',
        background: 'transparent',
        cursor: 'pointer',
        transition: 'box-shadow 0.2s',
        lineHeight: 1,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = isJapanese
          ? '0 0 8px rgba(255,0,255,0.5)'
          : '0 0 8px rgba(0,229,255,0.5)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {isJapanese ? 'EN' : 'JA'}
    </button>
  )
}
