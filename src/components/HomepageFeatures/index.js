import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

const FeatureList = [
  {
    title: 'The Vision',
    src: require('@site/static/img/1.webp').default,
    description: (
      <>
        The Hive is a solution to the lack of care and resources available for
        those with chronic conditions including but not limited to; PTSD,
        neurodiversities, autoimmune conditions, eating disorders, and general
        anxiety and depression. We work to provide education, resources, and
        support for women and non-binary folks in need. We hope to raise
        awareness of so many invisible disabilities and to close the gap in
        quality of life for those affected. Together we can create safe spaces,
        lift each other's moral, capacities, and quality of life, thereby
        improving our communities.
      </>
    )
  },
  {
    title: 'Our Mission: Empowering Women and Non-Binary Femmes',
    src: require('@site/static/img/2.webp').default,
    description: (
      <>
        At The Healing Hive, we believe in the power of women supporting other
        women and non-binary individuals. Our community-driven charity is built
        on the principles of trauma-informed care and peer support, creating a
        nurturing environment where everyone can thrive. We understand the
        unique experiences and obstacles faced by marginalized women and
        non-binary individuals, and we are committed to uplifting and empowering
        them through education, resources, and tailored support services.
      </>
    )
  },
  {
    title: 'A Comprehensive Approach to Healing',
    src: require('@site/static/img/3.webp').default,
    description: (
      <>
        Trauma has far-reaching impacts, often leading to other chronic
        conditions and affecting relationships and communities at large. That's
        why our mission extends beyond trauma support alone. We provide a range
        of scientifically backed services, including educational resources,
        coaching, workshops, gatherings, and community events, all designed to
        address the unique needs of our beneficiaries.
      </>
    )
  }
]

function Feature({ src, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img
          src={src}
          className={clsx(styles.featureSvg, styles.roundedImage)}
          alt={title}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
