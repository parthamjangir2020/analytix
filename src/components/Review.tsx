/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { motion } from 'motion/react';

/**
 * Components
 */
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card';

/**
 * Constants
 */
import { reviewData } from '@/constants';

/**
 * Assets
 */
import { Quote } from 'lucide-react';

/**
 * Framer motion variants
 */
import * as variants from '@/lib/motionVariants';

const Review = () => {
  return (
    <section className='section'>
      <div className='container'>
        <div className='section-head'>
          <motion.p
            variants={variants.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-subtitle'
          >
            {reviewData.sectionSubtitle}
          </motion.p>

          <motion.h2
            variants={variants.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-title'
          >
            {reviewData.sectionTitle}
          </motion.h2>
        </div>

        <motion.div
          variants={variants.staggerContainer}
          initial='start'
          whileInView='end'
          viewport={{ once: true }}
          className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'
        >
          {reviewData.reviewCard.map(
            ({ title, text, reviewAuthor, date }, index) => (
              <motion.div
                key={index}
                variants={variants.fadeInUp}
              >
                <Card className='relative'>
                  <CardHeader>
                    <CardTitle className='text-lg'>{title}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className='text-sm text-muted-foreground line-clamp-3'>
                      {text}
                    </p>
                  </CardContent>

                  <CardFooter className='block'>
                    <p>{reviewAuthor}</p>

                    <p className='text-xs text-muted-foreground'>{date}</p>
                  </CardFooter>

                  <div className='absolute bottom-0 right-3 opacity-[0.02]'>
                    <Quote size={80} />
                  </div>
                </Card>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Review;
