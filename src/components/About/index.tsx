'use client'
/* eslint-disable react/no-unescaped-entities */
import { Avatar, Box, Button, Flex, Text, useHovered } from "@mantine/core"
import icPhone from "@/assets/icons/icPhone.svg"
import icEmail from "@/assets/icons/icEmail.svg"
import icPlaceMarker from "@/assets/icons/icPlaceMarker.svg"
import imgAvatar from "@/assets/images/imgAvatar.jpg"
import Image from "next/image"
import useWindowSize from "@/hooks/use-window-size"
import ScrollFadeUp from "../shared/scroll-fade-up"
import { useHover } from "@mantine/hooks"
import { useContext, useState } from "react"
import { ScrollContext } from "@/contexts/ScrollContext"
import Link from "next/link"

function About() {
    const { isMobile } = useWindowSize();
    const { hovered, ref } = useHover<HTMLButtonElement>();
    const { targetRef, targetId } = useContext(ScrollContext);

    const handleDownload = () => {
        const pdfUrl = '/cv/CV_Thanh_Dang.pdf';

        const fileName = 'CV_Thanh_Dang.pdf';

        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = fileName;

        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
    };

    const [isOpen, setIsOpen] = useState(false);
    const handlePreviewCv = () => {
        // setIsOpen(true);

    }

    return <ScrollFadeUp repeat>
        <Box
            id="about"
            ref={targetId === 'about' ? targetRef : null}
            style={{
                backgroundColor: '#F7F7F7',
                padding: isMobile ? '32px 0 32px 32px' : '64px 128px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '32px',
                width: '100%'
            }}>
            <Box
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    maxWidth: '700px',
                }}>

                <Text style={{
                    fontSize: '32px',
                    fontWeight: 700,
                    lineHeight: '48px',
                }}>Hi There,</Text>

                <Text
                    style={{
                        fontSize: '32px',
                        fontWeight: 700,
                        lineHeight: '48px',
                        textWrap: 'nowrap'
                    }}
                >I'm <span style={{
                    backgroundImage: 'var(--primary-color)',
                    color: 'transparent',
                    backgroundClip: 'text'
                }}>Aiden Dang</span></Text>

                <Text style={{
                    // textAlign: 'justify'
                }}>Dedicated front-end developer skills, merging creativity with technical expertise for visually appealing and user-centric websites.</Text>

                <Box id="contact-and-download-cv" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: '8px',
                    gap: '24px',
                }}>
                    <Box
                        style={{
                            display: 'flex',
                        }}>
                        <div style={{
                            backgroundImage: 'var(--primary-color)',
                            width: '7px',
                        }} />

                        <Box
                            style={{
                                backgroundColor: '#F7F7F7',
                                display: 'flex',
                                flexDirection: 'column',
                                paddingLeft: '16px',
                            }}>
                            <Box
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                }}>
                                <Image src={icPlaceMarker} alt="place-marker" width={24} height={24} />
                                <Text style={{
                                    fontSize: '16px',
                                    lineHeight: '32px',
                                }}>Ho Chi Minh City, Viet Nam</Text>
                            </Box>
                            <Box
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                }}>
                                <Image src={icPhone} alt="phone" width={24} height={24} />
                                <Text style={{
                                    fontSize: '16px',
                                    lineHeight: '32px',
                                }}>0337 268 100</Text>
                            </Box>
                            <Box
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                }}>
                                <Image src={icEmail} alt="email" width={24} height={24} />
                                <Text style={{
                                    fontSize: '16px',
                                    lineHeight: '32px',
                                }}>thanh.dangquang@gmail.com</Text>
                            </Box>
                        </Box>
                    </Box>

                    <Flex gap={4}>
                        <Link href="/cv-preview" target="_blank">
                            <Button variant="outline" c='rgb(8, 205, 218)' style={{
                                borderColor: 'rgb(8, 205, 218)',
                            }}>PREVIEW CV</Button>
                        </Link>
                        <Button
                            ref={ref}
                            onClick={handleDownload}
                            style={{
                                width: 'max-content',
                                backgroundSize: '200%',
                                transition: 'background-position 0.8s ease, color 0.3s ease',
                                backgroundImage: hovered
                                    ? 'linear-gradient(90deg, rgb(26, 247, 169), rgb(8, 205, 218), rgb(26, 247, 169))'
                                    : 'linear-gradient(90deg, rgb(8, 205, 218), rgb(26, 247, 169), rgb(8, 205, 218))',
                                backgroundPosition: hovered ? '100% 0' : '0% 0',
                            }}>DOWNLOAD CV</Button>
                    </Flex>
                </Box>
            </Box>

            <Avatar
                src={''}
                alt="it's me"
                size={250}
                style={{ borderRadius: '50%', objectFit: 'cover', color: 'green' }}
                visibleFrom={'md'}
            />
        </Box >
    </ScrollFadeUp >
}

export default About