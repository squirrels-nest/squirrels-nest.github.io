import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Parameter Widgets',
    image: require('@site/static/img/filter.png').default,
    description: (
      <>
        Define parameter widgets in Python or YAML! Properties such as dropdown
        options can come from lookup tables in your database.
      </>
    ),
  },
  {
    title: 'Data Models',
    image: require('@site/static/img/data_model.png').default,
    description: (
      <>
        Create data models in Jinja SQL or Python! Like <a href="https://www.getdbt.com/">dbt</a>, 
        use <code>ref()</code> for model dependencies. You can even join views from
        different database systems!
      </>
    ),
  },
  {
    title: 'Dataset Endpoints',
    image: require('@site/static/img/running_squirrel.png').default,
    description: (
      <>
        Configure API endpoints for datasets in YAML! Use the <code>sqrl run</code> CLI 
        to run the API server, and query your datasets in real time with parameter 
        selections.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} style={{"width":"100px", "height":"100px"}} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
  );
}
