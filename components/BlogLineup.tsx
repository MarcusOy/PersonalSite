import React, { useEffect, useState } from 'react'
import GhostContentAPI from '@tryghost/content-api'
import { Box, Flex, Image } from 'rebass'
import { FaSpinner } from 'react-icons/fa'
import DataStore from '../data/DataStore'
import { useTheme } from './Theme'
import BaseText from './Typography/BaseText'
import { blogArticleAnimation } from './Animations'

interface IBlogArticle {
    uuid: string
    title: string
    author: {
        name: string
        image: string
        url: string
    }
    image: string
    tag: string
    url: string
    date: string
    readingTime: number
}

const BlogLineupItem = (p: IBlogArticle) => {
    const { currentIndex, isMenuAccessedOnce } = DataStore.useState((s) => s)
    const currentAccent = useTheme().theme.colors.inOrder[currentIndex]

    return (
        <Box
            className="hov-scale-min"
            width={175}
            p={15}
            mr={25}
            sx={{ borderRadius: 20, cursor: 'pointer' }}
            backgroundColor="#171717"
            onClick={() => {
                window.open(p.url)
            }}
        >
            <BaseText
                mb={2}
                fontSize={11}
                // fontWeight="bold"
                letterSpacing={1.05}
                sx={{ textTransform: 'uppercase' }}
                color={currentAccent}
            >
                {p.tag}
            </BaseText>
            <Image
                src={p.image}
                sx={{
                    pointerEvents: 'none',
                }}
            />

            <BaseText py={2} fontWeight="bold">
                {p.title}
            </BaseText>
            <BaseText fontSize={12} color="#E4E4E4">
                {p.date} • {p.readingTime} min{p.readingTime > 1 && 's'} read
            </BaseText>
        </Box>
    )
}

const BlogLineup = () => {
    const [data, setData] = useState<IBlogArticle[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        if (!isLoading) {
            setIsLoading(true)
            fetchData()
        }
    }, [])

    const fetchData = () => {
        const api = new GhostContentAPI({
            url: 'https://blog.m.orciuch.org',
            key: '01235e76f00145c42aa41c69e6',
            version: 'v3',
        })
        api.posts
            .browse({ limit: 3, include: 'tags,authors' })
            .then((posts) => {
                console.log(posts)
                let articles: IBlogArticle[] = (posts as Array<any>).map(
                    (p) => {
                        return {
                            uuid: p.uuid,
                            title: p.title,
                            author: {
                                name: p.primary_author.name,
                                image: p.primary_author.profile_image,
                                url: p.primary_author.url,
                            },
                            image: p.feature_image,
                            tag: p.primary_tag.name,
                            url: p.url,
                            date: new Date(p.created_at).toLocaleDateString(),
                            readingTime: p.reading_time,
                        }
                    }
                )
                setData(articles)
                setIsLoading(false)
            })
            .catch((err) => {
                setError(err.message)
            })
    }

    if (isLoading)
        return (
            <Flex alignItems="end" width={50}>
                <FaSpinner className="icon-spin" color="white" />
            </Flex>
        )
    if (error != '')
        return <p>An error occured retrieving blog posts: {error}</p>

    return (
        <Flex alignItems="end">
            {data.map((a, i) => {
                return (
                    <div
                        {...blogArticleAnimation}
                        key={a.uuid}
                        data-aos-delay={500 + 200 * i}
                    >
                        <BlogLineupItem {...a} />
                    </div>
                )
            })}
        </Flex>
    )
}

export default BlogLineup
