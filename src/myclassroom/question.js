import React, { useState } from 'react'

import './Question.css'
const ExamScreen = () => {
    const [open, setOpen] = useState('false')
    function closeopen() {
        console.log(open)
        if (open === 'false') {
            document.getElementById('one_question_data_con').style.width = '100%'
            document.getElementById('right_question_con').style.display = 'none'
            setOpen('true')
        }
        if (open === 'true') {
            document.getElementById('one_question_data_con').style.width = '66.6%'
            document.getElementById('right_question_con').style.display = 'block'
            setOpen('false')
        }
    }
    return (
        <div>
           
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8 col-md-8' id='one_question_data_con'>
                        <div className='question-con'>
                            <p className='question_number_para'>Question 1 :</p><hr></hr>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                                obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                                nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit</p>
                            <div onClick={closeopen} className='arrow_btn'>hdsj</div>
                            <p className='option_para'>Options:</p><hr></hr>
                            <p> Impedit </p>
                            <p>molestias</p>
                            <p>quisquam</p>
                            <p>harum</p><br />
                            <div className='radio-con'>
                                <div>
                                    <input type='radio'></input>
                                    <label>1.</label>
                                </div>
                                <div>
                                    <input type='radio'></input>
                                    <label>2.</label>
                                </div>
                                <div>
                                    <input type='radio'></input>
                                    <label>3.</label>
                                </div>
                                <div>
                                    <input type='radio'></input>
                                    <label>4.</label>
                                </div>
                            </div>
                        </div><hr></hr>
                        <div>
                            <button className='save_btn'>SAVE & NEXT</button>
                            <button className='clear_btn'>CLEAR</button>
                            <button className='review_btn'>SAVE & Mark For Review</button>
                            <button className='review_next_btn'>Mark For Review & Next</button>
                        </div>
                        <div className='submit-con'>
                            <button className='submit-con-btn'>
                                <svg width="10" height="10" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '10px' }}>
                                    <path d="M0.000473022 8.00372C-0.000540733 7.82846 0.0330524 7.65471 0.0993261 7.49246C0.1656 7.3302 0.263252 7.18262 0.38668 7.05818L7.0454 0.399467C7.16956 0.275297 7.31698 0.176801 7.47921 0.109601C7.64145 0.0424004 7.81533 0.0078125 7.99093 0.0078125C8.34558 0.0078125 8.6857 0.148695 8.93647 0.399467C9.18724 0.650239 9.32812 0.99036 9.32812 1.34501C9.32812 1.69965 9.18724 2.03977 8.93647 2.29054L3.20997 8.00372L8.93647 13.7169C9.18724 13.9677 9.32812 14.3078 9.32813 14.6624C9.32813 15.0171 9.18724 15.3572 8.93647 15.608C8.6857 15.8587 8.34558 15.9996 7.99093 15.9996C7.63629 15.9996 7.29617 15.8587 7.0454 15.608L0.38668 8.94926C0.263252 8.82482 0.1656 8.67724 0.0993261 8.51499C0.0330524 8.35273 -0.000540733 8.17899 0.000473022 8.00372Z" fill="#575757" />
                                    <path d="M7.98875 8.00372C7.98774 7.82846 8.02133 7.65471 8.08761 7.49246C8.15388 7.3302 8.25153 7.18262 8.37496 7.05818L15.0337 0.399467C15.2844 0.148695 15.6246 0.0078125 15.9792 0.0078125C16.3339 0.0078125 16.674 0.148695 16.9248 0.399467C17.1755 0.650239 17.3164 0.99036 17.3164 1.34501C17.3164 1.69965 17.1755 2.03977 16.9248 2.29054L11.1983 8.00372L16.9248 13.7169C17.1755 13.9677 17.3164 14.3078 17.3164 14.6624C17.3164 15.0171 17.1755 15.3572 16.9248 15.608C16.674 15.8587 16.3339 15.9996 15.9792 15.9996C15.6246 15.9996 15.2844 15.8587 15.0337 15.608L8.37496 8.94926C8.25153 8.82482 8.15388 8.67724 8.08761 8.51499C8.02133 8.35273 7.98774 8.17899 7.98875 8.00372Z" fill="#575757" />
                                </svg>BACK
                            </button>
                            <button className='submit-con-btn'>NEXT
                                <svg width="10" height="10" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '10px' }}>
                                    <path d="M18.164 8.00372C18.165 8.179 18.1314 8.35275 18.0652 8.51501C17.9989 8.67727 17.9012 8.82486 17.7778 8.9493L11.1188 15.6083C10.9946 15.7325 10.8472 15.831 10.6849 15.8982C10.5227 15.9654 10.3488 16 10.1732 16C9.81853 16 9.47839 15.8591 9.22761 15.6083C8.97683 15.3575 8.83594 15.0174 8.83594 14.6627C8.83594 14.3081 8.97683 13.9679 9.22761 13.7172L14.9544 8.00372L9.22761 2.29028C8.97683 2.03949 8.83594 1.69936 8.83594 1.3447C8.83594 0.990034 8.97683 0.649899 9.22761 0.399116C9.47839 0.148333 9.81853 0.00744247 10.1732 0.00744247C10.5279 0.00744247 10.868 0.148333 11.1188 0.399116L17.7778 7.05814C17.9012 7.18258 17.9989 7.33017 18.0652 7.49243C18.1314 7.6547 18.165 7.82845 18.164 8.00372Z" fill="#575757" />
                                    <path d="M10.1718 8.00372C10.1728 8.179 10.1393 8.35275 10.073 8.51501C10.0067 8.67727 9.90904 8.82486 9.78561 8.9493L3.12659 15.6083C2.8758 15.8591 2.53567 16 2.181 16C1.82634 16 1.48621 15.8591 1.23542 15.6083C0.984639 15.3575 0.84375 15.0174 0.84375 14.6627C0.84375 14.3081 0.984639 13.9679 1.23542 13.7172L6.96218 8.00372L1.23542 2.29028C0.984639 2.03949 0.84375 1.69936 0.84375 1.3447C0.84375 0.990034 0.984639 0.649899 1.23542 0.399116C1.48621 0.148333 1.82634 0.00744247 2.181 0.00744247C2.53567 0.00744247 2.8758 0.148333 3.12659 0.399116L9.78561 7.05814C9.90904 7.18258 10.0067 7.33017 10.073 7.49243C10.1393 7.6547 10.1728 7.82845 10.1718 8.00372Z" fill="#575757" />
                                </svg>

                            </button>
                            <button className='submit-con-btn-O'>SUBMIT</button>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4' id='right_question_con'>
                        <div className='Mark_scheme_con'>
                            <div className='Mark_scheme_inner_one'>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div className='Not_visited_con'>96</div>
                                    <div style={{ fontSize: '16px', margin: '10px', color: '#636363' }}>Not Visited</div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div className='Not_answered'>2</div>
                                    <div style={{ fontSize: '16px', margin: '10px', color: '#636363' }}>Not Answered</div>

                                </div>
                            </div>
                            <div className='Mark_scheme_inner_two'>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div className='Answered'>10</div>
                                    <div style={{ fontSize: '16px', margin: '10px', color: '#636363' }}>Answered</div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div className='Review'>2</div>
                                    <div style={{ fontSize: '16px', margin: '10px', color: '#636363' }}>Mark for Review</div>
                                </div>
                            </div>
                            <div className='Mark_scheme_inner_three'>
                                <div style={{ display: 'flex' }}>
                                    <div className='Review_answered'>0
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" id='log'>
                                            <circle cx="6" cy="6" r="6" fill="#6DBC1F" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.41171 3H4.17657C4.12974 3 4.08483 3.0186 4.05172 3.05172C4.0186 3.08483 4 3.12974 4 3.17657V8.82343C4 8.87026 4.0186 8.91517 4.05172 8.94828C4.08483 8.9814 4.12974 9 4.17657 9H8.41171C8.45854 9 8.50346 8.9814 8.53657 8.94828C8.56968 8.91517 8.58829 8.87026 8.58829 8.82343V3.17657C8.58829 3.12974 8.56968 3.08483 8.53657 3.05172C8.50346 3.0186 8.45854 3 8.41171 3ZM8.23514 8.64707H4.35293V3.35293H8.23536L8.23514 8.64707Z" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.88136 4.7671H7.70479C7.72848 4.76792 7.75209 4.76397 7.77422 4.75547C7.79635 4.74698 7.81655 4.73411 7.8336 4.71764C7.85065 4.70118 7.86421 4.68144 7.87347 4.65962C7.88274 4.6378 7.88751 4.61434 7.88751 4.59063C7.88751 4.56693 7.88274 4.54347 7.87347 4.52164C7.86421 4.49982 7.85065 4.48009 7.8336 4.46362C7.81655 4.44716 7.79635 4.43429 7.77422 4.42579C7.75209 4.4173 7.72848 4.41334 7.70479 4.41417H4.88136C4.83562 4.41576 4.79229 4.43505 4.7605 4.46797C4.72871 4.50089 4.71094 4.54487 4.71094 4.59063C4.71094 4.6364 4.72871 4.68038 4.7605 4.7133C4.79229 4.74621 4.83562 4.7655 4.88136 4.7671Z" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.88194 5.47022H7.70537C7.72906 5.47105 7.75267 5.4671 7.77481 5.4586C7.79694 5.4501 7.81713 5.43724 7.83418 5.42077C7.85123 5.4043 7.86479 5.38457 7.87406 5.36275C7.88332 5.34093 7.88809 5.31746 7.88809 5.29376C7.88809 5.27005 7.88332 5.24659 7.87406 5.22477C7.86479 5.20295 7.85123 5.18322 7.83418 5.16675C7.81713 5.15028 7.79694 5.13741 7.77481 5.12892C7.75267 5.12042 7.72906 5.11647 7.70537 5.11729H4.88194C4.85825 5.11647 4.83463 5.12042 4.8125 5.12892C4.79037 5.13741 4.77018 5.15028 4.75313 5.16675C4.73608 5.18322 4.72252 5.20295 4.71325 5.22477C4.70399 5.24659 4.69922 5.27005 4.69922 5.29376C4.69922 5.31746 4.70399 5.34093 4.71325 5.36275C4.72252 5.38457 4.73608 5.4043 4.75313 5.42077C4.77018 5.43724 4.79037 5.4501 4.8125 5.4586C4.83463 5.4671 4.85825 5.47105 4.88194 5.47022Z" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.88194 6.18116H7.70537C7.72906 6.18199 7.75267 6.17803 7.77481 6.16954C7.79694 6.16104 7.81713 6.14817 7.83418 6.13171C7.85123 6.11524 7.86479 6.09551 7.87406 6.07369C7.88332 6.05186 7.88809 6.0284 7.88809 6.0047C7.88809 5.98099 7.88332 5.95753 7.87406 5.93571C7.86479 5.91389 7.85123 5.89415 7.83418 5.87769C7.81713 5.86122 7.79694 5.84835 7.77481 5.83986C7.75267 5.83136 7.72906 5.82741 7.70537 5.82823H4.88194C4.85825 5.82741 4.83463 5.83136 4.8125 5.83986C4.79037 5.84835 4.77018 5.86122 4.75313 5.87769C4.73608 5.89415 4.72252 5.91389 4.71325 5.93571C4.70399 5.95753 4.69922 5.98099 4.69922 6.0047C4.69922 6.0284 4.70399 6.05186 4.71325 6.07369C4.72252 6.09551 4.73608 6.11524 4.75313 6.13171C4.77018 6.14817 4.79037 6.16104 4.8125 6.16954C4.83463 6.17803 4.85825 6.18199 4.88194 6.18116Z" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.88194 6.88429H7.70537C7.72906 6.88511 7.75267 6.88116 7.77481 6.87266C7.79694 6.86417 7.81713 6.8513 7.83418 6.83483C7.85123 6.81836 7.86479 6.79863 7.87406 6.77681C7.88332 6.75499 7.88809 6.73153 7.88809 6.70782C7.88809 6.68412 7.88332 6.66065 7.87406 6.63883C7.86479 6.61701 7.85123 6.59728 7.83418 6.58081C7.81713 6.56434 7.79694 6.55148 7.77481 6.54298C7.75267 6.53448 7.72906 6.53053 7.70537 6.53136H4.88194C4.85825 6.53053 4.83463 6.53448 4.8125 6.54298C4.79037 6.55148 4.77018 6.56434 4.75313 6.58081C4.73608 6.59728 4.72252 6.61701 4.71325 6.63883C4.70399 6.66065 4.69922 6.68412 4.69922 6.70782C4.69922 6.73153 4.70399 6.75499 4.71325 6.77681C4.72252 6.79863 4.73608 6.81836 4.75313 6.83483C4.77018 6.8513 4.79037 6.86417 4.8125 6.87266C4.83463 6.88116 4.85825 6.88511 4.88194 6.88429Z" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.88136 7.58741H7.70479C7.72848 7.58824 7.75209 7.58428 7.77422 7.57579C7.79635 7.56729 7.81655 7.55443 7.8336 7.53796C7.85065 7.52149 7.86421 7.50176 7.87347 7.47994C7.88274 7.45811 7.88751 7.43465 7.88751 7.41095C7.88751 7.38724 7.88274 7.36378 7.87347 7.34196C7.86421 7.32014 7.85065 7.3004 7.8336 7.28394C7.81655 7.26747 7.79635 7.2546 7.77422 7.24611C7.75209 7.23761 7.72848 7.23366 7.70479 7.23448H4.88136C4.83562 7.23608 4.79229 7.25537 4.7605 7.28829C4.72871 7.3212 4.71094 7.36518 4.71094 7.41095C4.71094 7.45671 4.72871 7.50069 4.7605 7.53361C4.79229 7.56653 4.83562 7.58582 4.88136 7.58741Z" fill="white" />
                                        </svg>
                                    </div>
                                    <div style={{ fontSize: '16px', margin: '10px', color: '#636363' }}>Answered & Marked for Review (will be considered for evaluation)</div>
                                </div>
                            </div>
                        </div><br />
                        <div className='question_number'>
                            <div className='question_number_box'>96</div>
                            <div className='question_number_box'>96</div>
                            <div className='question_number_box'>96</div>
                            <div className='question_number_box'>96</div>
                            <div className='question_number_box'>96</div>
                            <div className='question_number_box'>96</div>
                            <div className='question_number_box'>96</div>
                            <div className='question_number_box'>96</div>
                            <div className='question_number_box'>96</div>
                            <div className='question_number_box'>96</div>
                            <div className='question_number_box'>96</div>
                            <div className='question_number_box'>96</div>
                            <div className='question_number_box'>96</div>
                            <div className='question_number_box'>96</div>
                            <div className='question_number_box'>96</div>
                            <div className='question_number_box'>96</div>
                            <div className='question_number_box'>96</div>
                            <div className='question_number_box'>96</div>
                            <div className='question_number_box'>96</div>
                            <div className='question_number_box'>96</div>
                            <div className='question_number_box'>96</div>
                            <div className='question_number_box'>96</div>
                            <div className='question_number_box'>96</div>
                            <div className='question_number_box'>96</div>
                            <div className='question_number_box'>96</div>
                            <div className='question_number_box'>96</div>
                            <div className='question_number_box'>96</div>
                            <div className='question_number_box'>96</div>
                            <div className='question_number_box'>96</div>
                            <div className='question_number_box'>96</div>
                            <div className='question_number_box'>96</div>
                            <div className='question_number_box'>96</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExamScreen
