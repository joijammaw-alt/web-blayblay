'use client';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface RecommendedGameFromDb {
  id: string;
  title: string;
  tags: string[];
  desc: string;
  img: string;
}

interface RecommendedGamesProps {
  initialGames?: RecommendedGameFromDb[];
}

const tagColorMap: Record<string, string> = {
  'เล่าเรื่อง': '#FF9900',
  'จินตนาการ': '#808080',
  '3-6 คน': '#FF9900',
  'ปาร์ตี้': '#C0392B',
  'คำศัพท์': '#8E44AD',
  '4+ คน': '#C0392B',
  'วางแผน': '#27AE60',
  'ครอบครัว': '#27AE60',
  '2-5 คน': '#27AE60',
};

const getTagColor = (tag: string) => tagColorMap[tag] || '#555555';

const defaultGames = [
  {
    id: 'dixit',
    title: 'Dixit',
    img: '/img/690953298_1332313532099290_2726634727127638217_n.jpg',
    tags: [{ t: 'เล่าเรื่อง', c: '#FF9900' }, { t: 'จินตนาการ', c: '#808080' }, { t: '3-6 คน', c: '#FF9900' }],
    desc: 'ใช้ภาพเล่าเรื่อง เปิดจินตนาการ ทายความคิดกันให้ถูกต้อง สนุก อบอุ่น และสร้างรอยยิ้มให้ทุกคนบนโต๊ะ',
    borderColor: '#FF9900'
  },
  {
    id: 'codenames',
    title: 'Codenames',
    img: '/img/693435817_2038086813725139_1562932010930628367_n.jpg',
    tags: [{ t: 'ปาร์ตี้', c: '#C0392B' }, { t: 'คำศัพท์', c: '#8E44AD' }, { t: '4+ คน', c: '#C0392B' }],
    desc: 'เกมคำศัพท์สุดมันส์ แบ่งทีมลับใบ้คำ คิดเชื่อมโยง แข่งกับเวลา ยิ่งเยอะ ยิ่งสนุก!',
    borderColor: '#C0392B'
  },
  {
    id: 'carcassonne',
    title: 'Carcassonne',
    img: '/img/665990488_4463411690642997_4580202065504028951_n.jpg',
    tags: [{ t: 'วางแผน', c: '#27AE60' }, { t: 'ครอบครัว', c: '#27AE60' }, { t: '2-5 คน', c: '#27AE60' }],
    desc: 'สร้างเมือง วางพื้นที่ สร้างเส้นทาง วางแผนและเก็บแต้มไปด้วยกัน เหมาะกับครอบครัวและมือใหม่',
    borderColor: '#27AE60'
  }
];

export default function RecommendedGames({ initialGames }: RecommendedGamesProps) {
  // Use DB data if provided and not empty, otherwise fallback to original mock data
  const games = (initialGames && initialGames.length > 0) 
    ? initialGames.map(game => {
        const mappedTags = game.tags.map(tag => ({
          t: tag,
          c: getTagColor(tag)
        }));
        
        // Derive border color from first tag, fallback to Dixit's orange if not set
        const borderColor = mappedTags.length > 0 ? mappedTags[0].c : '#FF9900';
        
        return {
          id: game.id,
          title: game.title,
          img: game.img,
          tags: mappedTags,
          desc: game.desc,
          borderColor: borderColor
        };
      })
    : defaultGames;
  return (
    <section id="recommended" style={{ padding: '4rem 2rem', background: 'white' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
          <span style={{ fontSize: '1.5rem' }}>🎲</span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: 'var(--bb-blue)', margin: 0 }}>เกมแนะนำยอดฮิต</h2>
          <span style={{ fontSize: '1.5rem', color: '#0057B8' }}>🧩</span>
        </div>

        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          
          <button style={{ position: 'absolute', left: '-20px', zIndex: 10, background: 'white', border: '1px solid #E8F0FE', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <ChevronLeft size={24} color="var(--bb-blue)" />
          </button>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', width: '100%' }}>
            {games.map((game, i) => (
              <div key={game.id} className="animate-fade-up"
                style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', border: `1px solid ${game.borderColor}30`, animationDelay: `${i * 0.1}s` }}>
                
                <div style={{ height: '220px', position: 'relative', background: '#f5f5f5' }}>
                  <Image src={game.img} alt={game.title} fill style={{ objectFit: 'cover' }} />
                </div>
                
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: game.borderColor, marginBottom: '0.8rem' }}>{game.title}</h3>
                  
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                    {game.tags.map(tag => (
                      <span key={tag.t} style={{ background: `${tag.c}20`, color: tag.c, padding: '0.2rem 0.6rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600 }}>
                        {tag.t}
                      </span>
                    ))}
                  </div>
                  
                  <p style={{ fontSize: '0.85rem', color: 'var(--bb-text-muted)', lineHeight: 1.6, marginBottom: '1.5rem', minHeight: '60px' }}>
                    {game.desc}
                  </p>
                  
                  <button style={{ width: '100%', background: 'transparent', border: `1.5px solid ${game.borderColor}`, color: game.borderColor, padding: '0.6rem', borderRadius: '25px', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer', transition: 'all 0.2s' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = game.borderColor; (e.currentTarget as HTMLElement).style.color = 'white'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = game.borderColor; }}>
                    ดูรายละเอียด
                  </button>
                </div>

              </div>
            ))}
          </div>

          <button style={{ position: 'absolute', right: '-20px', zIndex: 10, background: 'white', border: '1px solid #E8F0FE', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <ChevronRight size={24} color="var(--bb-blue)" />
          </button>

        </div>
      </div>
    </section>
  );
}
