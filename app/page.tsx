'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, BookOpen, Music, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const techStack = [
    { name: 'Java', level: 90, description: 'Core Java, Java EE, Spring Framework' },
    { name: 'Spring Boot', level: 85, description: 'REST APIs, Microservices, Security' },
    { name: 'React', level: 80, description: 'Frontend Development, State Management' },
    { name: 'Next.js', level: 75, description: 'Server-Side Rendering, Static Generation' },
    { name: 'TypeScript', level: 70, description: 'Type-Safe Development' },
    { name: 'PostgreSQL', level: 85, description: 'Database Design & Optimization' }
  ];

  const education = [
    {
      year: '2020',
      degree: 'Class 10',
      institution:'The Scottish Church Collegiate School',
      details: 'Completed Secondary Education with distinction'
    },
    {
      year: '2022',
      degree: 'Class 12',
      institution: 'Hindu School',
      details: 'Completed Higher Secondary Education with focus on Computer Science'
    },
    {
      year: '2022 - Present',
      degree: 'B.Tech in Computer Science',
      institution: 'Guru Nanak Institute of Technology',
      details: 'Specializing in Software Engineering and Full Stack Development'
    }
  ];

  const projects = [
    {
      title: 'Clone Website',
      description: 'A comprehensive website clone demonstrating full-stack development capabilities with Java backend and React frontend. Implemented user authentication, real-time updates, and responsive design.',
      tech: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Redis'],
      link: '#'
    },
    {
      title: 'eAttorney',
      description: 'Enhanced judgment system for legal professionals featuring document management, case tracking, and automated reporting. Implemented role-based access control and secure document handling.',
      tech: ['Java', 'Spring Security', 'MySQL', 'React', 'Docker'],
      link: '#'
    },
    {
      title: 'Banking System',
      description: 'Secure and scalable banking solution with complete transaction management, real-time notifications, and audit logging. Features include multi-factor authentication and fraud detection.',
      tech: ['Java', 'Spring Boot', 'JPA', 'React', 'PostgreSQL'],
      link: '#'
    }
  ];

  const musicAlbums = [
    {
      artist: 'Fossils',
      album: 'Fossils 1',
      cover: 'https://c.saavncdn.com/408/Fossils-Vol-1-Bengali-2001-20231120235711-500x500.jpg',
      albumUrl: 'https://open.spotify.com/album/4LK7A9a8z4UFHAL5MNpPdb?si=8_ppwc-iR6uerXyAzwYcuw'
    },
    {
      artist: 'Cactus',
      album: 'Cactus 1',
      cover: 'https://i.scdn.co/image/ab67616d0000b273f9caa9ac08695e5acd3a3ae2',
      albumUrl: 'https://open.spotify.com/artist/2PWPl2KNcCDDdhqT7vb2sR?si=VSOGXkMlT9WRXbTQDU3anw'
    },
    {
      artist: 'Warfaze',
      album: 'Warfaze',
      cover: 'https://i.scdn.co/image/ab67616d0000b273bc6d136d5d9ebdcd5db4bca7',
      albumUrl: 'https://open.spotify.com/artist/06eRdiCBgFUhiuFjei0eH2?si=zkS6kXd1Qw2Y99B2Rq6AXQ'
    },
    {
      artist: 'Pink Floyd',
      album: 'The Dark Side of the Moon',
      cover: 'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-125615-092313-weekend-rock-01-500-1379961884.jpg?w=500',
      albumUrl: 'https://open.spotify.com/album/4LH4d3cOWNNsVw41Gqt2kv?si=xewguJwMTVaFrNBIx1Hlbg'
    },
    {
      artist: 'Chandrabindoo',
      album: 'juju',
      cover: 'https://i.scdn.co/image/ab67616d0000b2737a0849478f06b2d28a6009ab',
      albumUrl: 'https://open.spotify.com/album/2dqYqS1VUGhQfA2n6aDKZd?si=v_jWTTdyShqq5sPOE1J8QA'
    },
    {
      artist: 'Moheener Ghoraguli',
      album: 'Aabaar Bochhor Kuri Pore',
      cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQChfbTnvL0c_PQtxYuHmAs-1pHr7YMpKZRug&s',
      albumUrl: 'https://open.spotify.com/artist/7mgmn5NDLnDY0y7dphjyLg?si=qaX1edTSQ5633ytXvUcrLw'
    }
  ];

  const books = [
    {
      title: 'Atomic Habits',
      author: 'James Clear',
      cover: 'https://images-na.ssl-images-amazon.com/images/P/0735211299.01.L.jpg',
      link: 'https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299'
    },
    {
      title: 'The Psychology of Money',
      author: 'Morgan Housel',
      cover: 'https://images-na.ssl-images-amazon.com/images/P/0857197681.01.L.jpg',
      link: 'https://www.amazon.com/Psychology-Money-Timeless-Lessons-Happiness/dp/0857197681'
    },
    {
      title: 'Deep Work',
      author: 'Cal Newport',
      cover: 'https://images-na.ssl-images-amazon.com/images/P/1455586692.01.L.jpg',
      link: 'https://www.amazon.com/Deep-Work-Focused-Success-Distracted/dp/1455586692'
    },
    {
      title: 'Think and Grow Rich',
      author: 'Napoleon Hill',
      cover: 'https://images-na.ssl-images-amazon.com/images/P/1585424331.01.L.jpg',
      link: 'https://www.amazon.com/Think-Grow-Rich-Napoleon-Hill/dp/1585424331'
    }
  ];

  return (
    <main className="min-h-screen bg-[#0A0A0A] bg-grid">
      {/* Header with contact info */}
      <header className="fixed top-0 w-full bg-black/50 backdrop-blur-sm z-50">
  <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
    <h1 className="text-2xl font-bold text-gradient">Saptak Mondal</h1>
    <div className="flex items-center gap-6">
      <a href="mailto:saptakmondal2004@gmail.com" className="hover:text-[#7000FF] transition-colors flex items-center gap-2">
        <Mail className="w-5 h-5" />
        <span className="hidden md:inline">Email</span>
      </a>
      <a href="tel:+917439358307" className="hover:text-[#7000FF] transition-colors flex items-center gap-2">
        <Phone className="w-5 h-5" />
        <span className="hidden md:inline">Call</span>
      </a>
      <a href="https://github.com/saptak69" target="_blank" rel="noopener noreferrer" className="hover:text-[#7000FF] transition-colors flex items-center gap-2">
        <Github className="w-5 h-5" />
        <span className="hidden md:inline">GitHub</span>
      </a>
      <a href="https://www.linkedin.com/in/saptak-mondal-33ab90253" target="_blank" rel="noopener noreferrer" className="hover:text-[#7000FF] transition-colors flex items-center gap-2">
        <Linkedin className="w-5 h-5" />
        <span className="hidden md:inline">LinkedIn</span>
      </a>
    </div>
  </div>
</header>


      {/* Hero Section */}
      <section className="pt-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="w-80 h-80 rounded-full overflow-hidden bg-gradient-to-br from-[#7000FF] to-[#00FFB2] p-1 shadow-lg shadow-[#7000FF]/20">
              <div className="w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/images/profile.jpg"
                  alt="Saptak Mondal"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl font-bold mb-6">
              Hello, I'm{' '}
              <span className="text-gradient">Saptak Mondal</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              A passionate Full Stack Developer specializing in Java and modern web technologies.
              I create robust, scalable applications with clean code and optimal performance.
              Let's build something amazing together.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-[#7000FF] hover:bg-[#7000FF]/80 rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-[#7000FF]/20">
                Download CV
              </button>
              <button className="px-8 py-3 border border-[#7000FF] hover:bg-[#7000FF]/10 rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-[#7000FF]/20">
                Contact Me
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-gradient text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Education
          </motion.h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="section-card p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                <p className="text-[#00FFB2] mb-2">{edu.year}</p>
                <p className="text-gray-400">{edu.details}</p>
                {edu.institution && (
                  <p className="text-[#7000FF] mt-2">{edu.institution}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-gradient text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Tech Stack
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className="section-card p-8"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-bold mb-2">{tech.name}</h3>
                <p className="text-gray-400 mb-4">{tech.description}</p>
                <div className="w-full h-2 bg-black/30 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#7000FF] to-[#00FFB2]"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-gradient text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="section-card p-8 card-hover"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-400 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[#7000FF]/20 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link 
                  href={project.link}
                  className="inline-flex items-center gap-2 text-[#00FFB2] hover:text-[#7000FF] transition-colors"
                >
                  View Project <ExternalLink className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-gradient text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Music I Love
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {musicAlbums.map((album, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={album.albumUrl}
                  target="_blank"
                  className="block album-card"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={album.cover}
                      alt={`${album.artist} - ${album.album}`}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-end p-4 z-10">
                      <div>
                        <h3 className="text-lg font-bold">{album.artist}</h3>
                        <p className="text-sm text-gray-300">{album.album}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reading Section */}
      <section className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-gradient text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Books That Inspire
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {books.map((book, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={book.link}
                  target="_blank"
                  className="block book-card"
                >
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <Image
                      src={book.cover}
                      alt={book.title}
                      width={300}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <div>
                        <h3 className="text-lg font-bold">{book.title}</h3>
                        <p className="text-sm text-gray-300">{book.author}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
